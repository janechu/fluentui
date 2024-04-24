import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import ts from 'typescript';

// This is the expected import path for the design tokens in the components *.styles.ts file
const designTokenFileImportRelativePath = '../theme/design-tokens.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), '../');

const comment =
  '// THIS FILE IS GENERATED AS PART OF THE BUILD PROCESS FROM scripts/generate-css-registration.js. DO NOT MANUALLY MODIFY THIS FILE.\n';
const cssRegistryImport = "import { cssPropertyRegistry } from '../utils/css-property-registry.js';\n";

function isComponentDirectory(item) {
  const directoryItems = fs.readdirSync(path.resolve(item.path, item.name), { withFileTypes: true });
  return directoryItems
    .map(directoryItem => {
      return directoryItem.name;
    })
    .includes(`${item.name}.styles.ts`);
}

function listComponentDirectories() {
  return fs
    .readdirSync(path.resolve(__dirname, './src'), { withFileTypes: true })
    .filter(item => item.isDirectory() && isComponentDirectory(item))
    .map(directory => directory.name);
}

listComponentDirectories().forEach(componentName => {
  const componentCssPropertyRegistryPath = path.resolve(
    __dirname,
    `./src/${componentName}/${componentName}.css-properties.ts`,
  );
  const componentStylesPath = path.resolve(__dirname, `./src/${componentName}/${componentName}.styles.ts`);
  const sourceFile = ts.createSourceFile(
    componentStylesPath,
    fs.readFileSync(componentStylesPath).toString(),
    ts.ScriptTarget.ES2019,
    /*setParentNodes */ true,
  );
  const propertyRegistry = [];

  if (sourceFile.kind === ts.SyntaxKind.SourceFile) {
    sourceFile.getChildren().forEach(child => {
      if (child.kind === ts.SyntaxKind.SyntaxList) {
        child.getChildren().forEach(syntaxListChild => {
          if (syntaxListChild.kind === ts.SyntaxKind.ImportDeclaration) {
            if (
              syntaxListChild?.moduleSpecifier?.text === designTokenFileImportRelativePath &&
              Array.isArray(syntaxListChild.importClause?.namedBindings.elements)
            ) {
              syntaxListChild.importClause?.namedBindings.elements.forEach(namedBinding => {
                propertyRegistry.push(namedBinding.name.escapedText);
              });
            }
          }
        });
      }
    });
  }

  if (propertyRegistry.length > 0) {
    console.log(
      `${comment}${cssRegistryImport}\n${JSON.stringify(propertyRegistry, null, 2)}.forEach((property) => {
    cssPropertyRegistry.add({
        name: \`--$\{property\}\`,
        inherits: true,
    });
});`,
      `write to: ${componentCssPropertyRegistryPath}`,
    );
  }
});

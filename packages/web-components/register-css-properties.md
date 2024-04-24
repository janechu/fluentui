# Registering CSS properties

## Problem

Currently there is no way to know which CSS properties are actually being used in imported web components.

## Current solution

Implementations utilizing the web components currently define all CSS properties assuming that any of the available CSS properties might be used. The issue with this is there are already a large number of CSS properties that exist in the library, and that number will continue to increase. This is causing some performance issues on initial page render.

## Proposed solution

Wherever the user imports a definition for a web component they should optionally be able to register the components CSS properties:

**note**: This should make the addition of registering CSS properties a non-breaking change and users can opt out if they prefer to define CSS properties themselves.

```ts
import '@fluentui/web-components/button';
import '@fluentui/web-components/button/register-css-properties';
```

If the user intends to get the CSS properties that have been added, they will have two methods available, `get` and `notify`.

```ts
import cssPropertyRegistry from '@fluentui/web-components/css-property-registry';

// Gets a map of registered CSS properties
cssPropertyRegistry.get();

// Notify when new css properties get registered for dynamic imports
cssPropertyRegistry.notify(newCssproperty => {
  // do something with the newCssProperty
});
```

## Proposed implementation

- Creation of a build script that generates a `*.css-properties.ts` file per component that adds each CSS property imported in `*.styles.ts` from `design-tokens.js`.
- Add an export of `cssPropertyRegistry` which will allow adding, getting all registered CSS properties, and a notify which accepts a callback which any newly added CSS properties will trigger.

## Potential issues

- If there is a duplication of the dependency, this will cause errors in browser as it is assumed that there is only one registry, any attempt at using the [`registerProperty`](https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty_static) when a CSS property has already been registered will result in a console error.
- Similar to the previous point, if any other part of the code attempts to use the `registerProperty` API with the same CSS property name it will result in a console error.
- The `registerProperty` API is new on the nightly builds of firefox, and not yet on the current version. It is available on all other major browsers, see the [browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty_static#browser_compatibility) for details.

const registry: Map<string, PropertyDefinition> = new Map();
let notify: null | ((registeredProperty: PropertyDefinition) => void) = null;

export const cssPropertyRegistry = Object.freeze({
  add: (config: PropertyDefinition) => {
    if (!registry.has(config.name)) {
      registry.set(config.name, config);

      window.CSS.registerProperty(config);

      if (notify) {
        notify(config);
      }
    }
  },
  get: (): Map<string, PropertyDefinition> => {
    return registry;
  },
  notify: (callback: (config: PropertyDefinition) => void) => {
    notify = callback;
  },
});

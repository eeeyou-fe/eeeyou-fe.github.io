export default (component, alias) => {
  component.install = (app) => {
    app.component(component.name, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component;
};

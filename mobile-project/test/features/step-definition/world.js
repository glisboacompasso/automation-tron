const {setWorldConstructor} = require('@cucumber/cucumber')


function CustomWorld(options) {
  for(const key in options.parameters) {
    this[key] = options.parameters[key]
  }
}


setWorldConstructor(CustomWorld)
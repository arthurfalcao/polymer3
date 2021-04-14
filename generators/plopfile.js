module.exports = (plop) => {
  plop.setPartial('tagName', 'app-{{kebabCase name}}')

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.ts',
        templateFile: 'templates/component.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      }
    ]
  })
}

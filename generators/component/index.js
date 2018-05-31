const Generator = require('yeoman-generator')
const mkdir = require('mkdirp')
const chalk = require('chalk')

const utils = require('../../utils')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)

    const { componentName } = opts

    this.ctx = {
      componentName,
    }
  }

  initializing () {
    this.log('Welcome to the component generator')
  }

  async prompting () {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name:',
        filter: input => utils.toTitleCase(input),
        validate: value => {
          return !!value || 'You must provide a name'
        },
      },
      {
        type: 'confirm',
        name: 'hasContainerComponent',
        message: 'Should it have a container component:',
        default: false,
      },
    ])

    await this._confirmAnswers(answers)

    this.ctx.componentName = answers.componentName
    this.ctx.hasContainerComponent = answers.hasContainerComponent
  }

  async _confirmAnswers (answers) {
    const confirmations = await this.prompt([
      {
        type: 'confirm',
        name: 'name',
        message: `Your component will be named ${chalk.cyan(answers.componentName)}. Sounds good?`,
        default: true,
      }
    ])

    if (!confirmations.name) {
      this.log(chalk.red('Aborting'))
      process.exit(1)
    }
  }

  writing () {
    this.destinationRoot(`./${this.ctx.componentName}`)

    this._makeFolders()
    this._copyTemplates()
  }

  _makeFolders () {
    mkdir(this.destinationPath())
    mkdir(this.destinationPath('__tests__'))
  }

  _copyTemplates () {
    const { componentName, hasContainerComponent } = this.ctx

    if (hasContainerComponent) {
      this._copyTpl('index.container.js', 'index.js')
      this._copyTpl('Container.js', `${componentName}Container.js`)
    } else {
      this._copyTpl('index.js', 'index.js')
    }

    this._copyTpl('Component.js', `${componentName}.js`)
    this._copyTpl('Component.scss', `${componentName}.scss`)
    this._copyTpl('__tests__/index.test.js', '__tests__/index.test.js')
    this._copyTpl('__tests__/Component.test.js', `__tests__/${componentName}.test.js`)
  }

  _copyTpl(from, to, ctx = {}) {
    this.fs.copyTpl(
      this.templatePath(from),
      this.destinationPath(to),
      Object.assign({}, this.ctx, ctx),
    )
  }

  end () {
    this.log(chalk.green(`Created ${this.options.componentName}`))
  }
}

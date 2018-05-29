const Generator = require('yeoman-generator')
const mkdir = require('mkdirp')
const chalk = require('chalk')

const utils = require('../../utils')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)

    const { pageName } = opts

    this.ctx = {
      pageName,
    }
  }

  initializing () {
    this.log('Welcome to the page generator')
  }

  async prompting () {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'pageName',
        message: 'Page name:',
        filter: input => utils.toTitleCase(input),
        validate: value => {
          return !!value || 'You must provide a name'
        },
      },
    ])

    await this._confirmAnswers(answers)

    this.ctx.pageName = answers.pageName
  }

  async _confirmAnswers (answers) {
    const confirmations = await this.prompt([
      {
        type: 'confirm',
        name: 'name',
        message: `Your page will be named ${chalk.cyan(answers.pageName)}. Sounds good?`,
      }
    ])

    if (!confirmations.name) {
      this.log(chalk.red('Aborting'))
      process.exit(1)
    }
  }

  writing () {
    this.destinationRoot(`src/pages/${this.ctx.pageName}`)

    this._makeFolders()
    this._copyTemplates()
  }

  _makeFolders () {
    mkdir(this.destinationPath())
    mkdir(this.destinationPath('__tests__'))
  }

  _copyTemplates () {
    const { pageName } = this.ctx

    this._copyTpl('index.js', 'index.js')
    this._copyTpl('PageContainer.js', `${pageName}Container.js`)
    this._copyTpl('Page.js', `${pageName}.js`)
    this._copyTpl('Page.scss', `${pageName}.scss`)
    this._copyTpl('__tests__/index.test.js', '__tests__/index.test.js')
    this._copyTpl('__tests__/PageContainer.test.js', `__tests__/${pageName}Container.test.js`)
    this._copyTpl('__tests__/Page.test.js', `__tests__/${pageName}.test.js`)
  }

  _copyTpl(from, to, ctx = {}) {
    this.fs.copyTpl(
      this.templatePath(from),
      this.destinationPath(to),
      Object.assign({}, this.ctx, ctx),
    )
  }

  end () {
    this.log(chalk.green(`Created ${this.options.pageName}`))
  }
}

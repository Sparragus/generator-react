const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  initializing () {
    this.log('')
    this.log('This generator does have an app generator. Try using one of these:')
    this.log('')
    this.log('yo react:component')
    this.log('yo react:page')
    this.log('')
  }
}

// vue-cli-service build can leave worker processes running after it finishes, which hangs CI builds.
process.env.NODE_ENV = 'production'
const Service = require('@vue/cli-service')

new Service(process.cwd())
  .run('build')
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

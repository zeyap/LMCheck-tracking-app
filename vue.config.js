module.exports = {
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
      globDirectory: './dist/',
      globPatterns: ['**/*.{html,js,css}'],
    }
  }
}

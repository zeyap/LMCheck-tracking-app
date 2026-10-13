module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/2020/let-me-check/' : '/',
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
      globDirectory: './dist/',
      globPatterns: ['**/*.{html,js,css}'],
    }
  }
}

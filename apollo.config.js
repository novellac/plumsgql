module.exports = {
  client: {
    service: {
      name: 'plumsgql',
      // URL to the GraphQL API
      url: 'http://localhost:8081/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js'],
  },
}

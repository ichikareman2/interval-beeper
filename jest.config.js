module.exports = {
  "roots": [
    "./tests"
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
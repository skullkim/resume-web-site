const config = {
  moduleNameMapper: {
    "\\.module\\.(css|scss)$": "identity-obj-proxy",
    "\\.(css|styl|less|sass|scss)$": require.resolve('./__mocks__/styleMock.js'),
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve("./__mocks__/fileMock.js")
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      "tsconfig": "tsconfig.jest.json"
    }
  }
};

module.exports = config;
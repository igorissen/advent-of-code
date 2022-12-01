module.exports = () => {
  return {
    testFramework: {
      autoDetect: true,
      files: ['./src/**/*.js'],
      tests: ['./tests/**/*.test.js']
    },
  };
};

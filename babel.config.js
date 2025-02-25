module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
   [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@navigations': './src/navigators',
          '@screens': './src/screens',
          '@core': './src/core',
          '@components': './src/components',
          '@assets': './src/assets',
        },
      },
   ],
 ],
};

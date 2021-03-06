// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import compression from 'compression';

// Run Browsersync
browserSync({
  port: 5001,
  ui: {
    port: 3001
  },
  server: {
    baseDir: 'dist',
     middleware: [compression()]
  },

  files: [
    'src/*.html'
  ],

  middleware: [historyApiFallback()]
});

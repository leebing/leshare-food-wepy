const prod = process.env.NODE_ENV === 'production';
module.exports = {
  wpyExt: '.wpy',
  build: {
    web: {
    }
  },
  eslint: true,
  'autoprefixer': {
    filter: /\.(wxss|css)$/,
    config: {
      browsers: ['last 11 iOS versions']
    }
  },
  compilers: {
    sass: {
      outputStyle: 'expanded'
    },
    babel: {
      sourceMap: true,
      presets: [
        'es2015',
        'stage-1'
      ],
      plugins: [
        'transform-export-extensions',
        'syntax-export-extensions'
      ]
    }
  },
  plugins: {
  }
};

if (prod) {
  delete module.exports.compilers.babel.sourcesMap;
  // 压缩sass
  module.exports.compilers['sass'] = {outputStyle: 'compressed'};

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}

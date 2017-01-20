module.exports = {
  webpack: (config, options) => {
    // Perform customizations to config
    // Important: return the modified config

    // changes the name of the entry point from index -> main.js
    config.entry.main = [
      './app/app.js'
    ];

    config.output.filename.main = {
      filename: "public/bundle.js"
    };

    config.devtool.main = ["eval-source-map"];

    return config;
  }
};

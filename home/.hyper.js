module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Fira Mono OT", "Fira Code", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // custom initial window size
    windowSize: [800, 450],

    // hyperlinks customization
    termCSS: `
      x-screen a {
        color: inherit;
      }
    `
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hypersolar`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hypercwd',
    'hyperlinks',
    'hyperterm-1password',
    'hyperterm-atom-dark',
    'hyperterm-paste',
    'hyperterm-tab-icons'
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
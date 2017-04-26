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

  plugins: [
    'hypercwd',
    'hyperlinks',
    'hyperterm-1password',
    'hyperterm-atom-dark',
    'hyperterm-paste',
    // 'hyper-alt-click',
    'hyperterm-tab-icons'
  ]
};
module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Fira Mono OT", "Fira Code", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // custom initial window size
    windowSize: [800, 450]
  },

  plugins: [
    'hypercwd',
    'hyperlinks',
    'hyper-search',
    'hyper-one-dark',
    // 'hyperterm-1password',
    // 'hyperterm-paste',
    // 'hyper-alt-click',
    // 'hyper-tab-icons',
    'hyperclean'
  ]
};
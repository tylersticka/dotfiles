module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Fira Mono OT", "Fira Code", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color (hex)
    // cursorColor: '#BBBBBB',

    // color of the text
    // foregroundColor: '#BBBBBB',

    // terminal background color
    // backgroundColor: '#DD131313',

    // border color (window, tabs)
    // borderColor: '#000',

    // custom css to embed in the main window
    css: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    termCSS: '',

    // custom padding
    padding: '12px 14px',

    // custom initial window size
    windowSize: [800, 450],

    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list
    // colors: [
    //   '#121212',
    //   '#FA2573',
    //   '#98E123',
    //   '#DFD460',
    //   '#1080D0',
    //   '#6338B3',
    //   '#43A8D0',
    //   '#BBBBBB',
    //   '#555555',
    //   '#F6669D',
    //   '#B1E05F',
    //   '#FFF26D',
    //   '#00AFFF',
    //   '#AF87FF',
    //   '#51CEFF',
    //   '#ffffff'
    // ]
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hypersolar`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hypercwd',
    'hyperterm-1password',
    'hyperterm-atom-dark',
    'hyperterm-tab-icons'
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 15,

    // font family with optional fallbacks
    //fontFamily: '"Meslo for Powerline", "DejaVu Sans Mono", Menlo, Inconsolata',
    fontFamily: '"Meslo LG S for Powerline", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(238, 78, 78, 1)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    foregroundColor: '#b9b8cc',

    // terminal background color
    backgroundColor: '#191840',

    // border color (window, tabs)
    borderColor: '#FF7530',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` if you're using a Linux set up
    // that doesn't shows native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: 'true',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: 'false',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '16px 20px 16px 4px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#19194b',
      red: '#c1193a',
      green: '#1ca974',
      yellow: '#FF4D4E',
      blue: '#3f3fbd',
      magenta: '#9a286d',
      cyan: '#19c1a0',
      white: '#d6d6e1',
      lightBlack: '#757593',
      lightRed: '#e6a3b6',
      lightGreen: '#8bc9b2',
      lightYellow: '#ff7071',
      lightBlue: '#7777d2',
      lightMagenta: '#ce4196',
      lightCyan: '#40e6c6',
      lightWhite: '#efeff4'
    },
    //colors: {
    //color: '#18184a',
    //color: '#831a45',
    //color: '#131639',
    //color: '#191840',
    //color: '#ee4e4e',
    //color: '#d8174c',
    //color: '#261740',
    //color: '#931846',
    //red: '#b51747',
    //color: '#3b1840',
    //color: '#727098',
    //black: '#19194b',
    //white: '#b9b8cc',
    //green: '#931846',
    //blue: '#6A85B0',
    //yellow: '#FF4D4E',
    //},

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: 'zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'false',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: ["hyperterm-cursor", "hyperminimal"], //, "hyperterm-earthsong"],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};

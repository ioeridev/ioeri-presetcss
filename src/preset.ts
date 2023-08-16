const nested = require('postcss-nested');
const mixins = require('postcss-mixins');
const remEm = require('./postcss-rem-em');
const lightDark = require('./postcss-light-dark');

function colorSchemeMixin(colorSchemeAttr: string) {
  return {
    [`[${colorSchemeAttr}] &`]: {
      '@mixin-content': {},
    },
  };
}

const hoverMixin = {
  '@media (hover: hover)': {
    '&:hover': {
      '@mixin-content': {},
    },
  },
  '@media (hover: none)': {
    '&:active': {
      '@mixin-content': {},
    },
  },
};

const rtlMixin = {
  '[dir="rtl"] &': {
    '@mixin-content': {},
  },
};

const notRtlMixin = {
  ':root:not([dir="rtl"]) &': {
    '@mixin-content': {},
  },
};

interface IoeriPresetOptions {
  colorSchemeAttr: string;
}

module.exports = (options: IoeriPresetOptions) => {
  const { colorSchemeAttr } = options;

  return {
    postcssPlugin: 'ioeri-presetcss',
    plugins: [
      lightDark(),
      nested(),
      remEm(),
      mixins({
        mixins: {
          light: colorSchemeMixin(`${colorSchemeAttr}='light'`),
          dark: colorSchemeMixin(`${colorSchemeAttr}='dark'`),
          hover: hoverMixin,
          rtl: rtlMixin,
          'not-rtl': notRtlMixin,
        },
      }),
    ],
  };
};

module.exports.postcss = true;

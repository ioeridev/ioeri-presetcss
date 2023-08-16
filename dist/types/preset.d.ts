declare const nested: any;
declare const mixins: any;
declare const remEm: any;
declare const lightDark: any;
declare function colorSchemeMixin(colorSchemeAttr: string): {
    [x: string]: {
        '@mixin-content': {};
    };
};
declare const hoverMixin: {
    '@media (hover: hover)': {
        '&:hover': {
            '@mixin-content': {};
        };
    };
    '@media (hover: none)': {
        '&:active': {
            '@mixin-content': {};
        };
    };
};
declare const rtlMixin: {
    '[dir="rtl"] &': {
        '@mixin-content': {};
    };
};
declare const notRtlMixin: {
    ':root:not([dir="rtl"]) &': {
        '@mixin-content': {};
    };
};
interface IoeriPresetOptions {
    colorSchemeAttr: string;
}

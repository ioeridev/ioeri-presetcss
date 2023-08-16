# ioeri-presetcss

Preset css compose integrated - for ioeri - any UI - tailwind.

### `Required`

`*React library`
`*postcss`

### [ioeri-presetcss repository](https://github.com/ioeridev/ioeri-presetcss)

## Installation [ioeri-presetcss:](https://github.com/ioeridev/ioeri-presetcss)

using [npm](https://www.npmjs.com/package/ioeri-presetcss)

```cirru
npm install postcss ioeri-presetcss
```

using [yarn](https://yarnpkg.com/)

```cirru
yarn add postcss ioeri-presetcss
```

## Usage

Add `ioeri-presetcss` to your `postcss.config.js` config:

```js
module.exports = {
  plugins: {
    'ioeri-presetcss': {
      colorSchemeAttr: 'custom-color-scheme', // Replace with the attribute name you want
    },
  },
};
```

Now you have access to styling component in to theme.

## Sample:

`css classes`

```css
.class {
  color: light-dark(rgb(26 27 30), white);
}
```

`tailwind classes`

```js
<span className="text-[light-dark(#1a1b1e,_#fff)]">...</span>
```

🚨

In practice, some of our syntax/code approach may be incompatible with the library and version you are using.

🏗️

You can join for testing or take part in providing updates.

## Contributors

<a href="https://github.com/ioeridev/ioeri/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ioeridev/ioeri" />
</a>

[Become a contributor](https://github.com/ioeridev/ioeri/blob/main/CONTRIBUTING.md)

## License

MIT License

[© ioeridev](https://github.com/ioeridev/ioeri-presetcss/blob/main/LICENSE)

# React Native Invalid Regexp - Invalid escape

## Context

> SyntaxError: Invalid RegExp: Invalid escape, js engine: hermes

An regexp in [zod-to-json-schema](https://www.npmjs.com/package/zod-to-json-schema) triggers this error when using the `hermes` engine, works fine with `jsc`

```javascript
// node_modules/zod-to-json-schema/dist/cjs/parsers/string.js
exports.zodPatterns = {
  // remove other codes
  emoji: RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"),
};
```

## To reproduce:

- Clone this repo
- npm install
- npm run ios

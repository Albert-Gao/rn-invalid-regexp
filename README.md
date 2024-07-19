# React Native Invalid Regexp - Invalid escape

## 1. Context

An regexp in [zod-to-json-schema](https://www.npmjs.com/package/zod-to-json-schema) triggers this error when using the `hermes` engine, works fine with `jsc`.

### 1.1 What is the error message?

> SyntaxError: Invalid RegExp: Invalid escape, js engine: hermes

### 1.2 What is the code?

```javascript
// node_modules/zod-to-json-schema/dist/cjs/parsers/string.js
exports.zodPatterns = {
  // remove other codes
  emoji: RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"),
};
```

## 2. Major versions

- "expo": "~51.0.21",
- "react-native": "0.74.3"

## 3. To reproduce:

1. Clone this repo
1. `npm install`
1. `npm run ios`

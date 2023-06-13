# eslint-config-sort-tsconfig

> Sort your `tsconfig.json` based on [the TSConfig Referenece](https://www.typescriptlang.org/tsconfig)

## Install

```sh
npm i eslint-config-sort-tsconfig -D
```

or

```sh
yarn add eslint-config-sort-tsconfig -D
```

or

```sh
pnpm add eslint-config-sort-tsconfig -D
```

## Usage

Add config to your `.eslintrc*` file.

```js
module.exports = {
  extends: ['sort-tsconfig'],
}
```

## VSCode integration

Add `"jsonc"` to `eslint.validate` in `.vscode/settings.json`.

```json
{
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "jsonc"]
}
```

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT

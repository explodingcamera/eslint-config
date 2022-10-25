# ESLint shareable config

## Some Features

- Mostly Autofixable
- Prettier is run automatically (No extra config needed)
- React/JSX + React Hooks support
- Security Issue Detection
- Enforces Promise best-practices
- TypeScript support
  & much more

## Install

```
$ npm install -D -E eslint @explodingcamera/eslint-config
```

(for typescript support, you need to have `typescript` installed too)

## Usage

Install the eslint plugin for your editor and enable Fix-On-Save,
then, add the ESLint config in your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "@explodingcamera/eslint-config"
	}
}
```

Or in `.eslintrc.json`:

```json
{
	"extends": "@explodingcamera/eslint-config"
}
```

Now you can also use it via the eslint cli:

```bash
$ npx eslint file.js
```

## Note for vs-code users:

Sometimes the vscode plugin can act up, I recommend updating your config:

```js
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
		},
```

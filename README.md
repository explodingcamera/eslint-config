# ESLint shareable config
## Some Features

* Mostly Autofixable
* Also runs prettier (No extra config needed, you only need the eslint editor plugin)
* React/JSX + React Hooks support
* Security Issue Detection
* Filename conventions (kebab-case to prevent OS-Specific issues with capital letters)
* Enforces Promise best-practices
* Supports Import Resolvers in babel & co
& much more

## Install

```
$ npm install -D -E eslint @canx/eslint-config
```

## Usage

Install the eslint plugin for your editor and enable Fix-On-Save
Then, add the ESLint config in your `package.json`:

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
$ npx eslint --format=pretty file.js
```
# `prettier-quick`

[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/prettier-quick.svg?style=flat-square)](https://npmjs.org/prettier-quick)

> Get Prettier Quick

Runs [Prettier](https://prettier.io) on your changed files.

Supported source control managers:

* Git

## Install

With `yarn`:

```shellsession
yarn add --dev prettier prettier-quick
```

With `npm`:

```shellsession
npm install --save-dev prettier prettier-quick
```

## Pre-Commit Hook

You can run `prettier-quick` as a pre-commit hook using [`husky`](https://github.com/typicode/husky).

> For Mercurial have a look at [`husky-hg`](https://github.com/TobiasTimm/husky-hg)


With `yarn`:

```shellsession
yarn add --dev lint-staged husky
```

With `npm`:

```shellsession
npm install --save-dev lint-staged husky
```

In `package.json`, add:

```
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
      "src/**/*.{js,json,css,less,scss,html,md,vue,jsx}": [
          "./node_modules/.bin/prettier --config ./node_modules/prettier-quick/.prettierrc --write",
          "git add"
      ]
  },
}
```

## Configuration and Ignore Files

`prettier-quick` will respect your [`.prettierrc`](https://prettier.io/docs/en/configuration), [`.prettierignore`](https://prettier.io/docs/en/ignore#ignoring-files), and [`.editorconfig`](http://editorconfig.org/) files, so there's no additional setup required. Configuration files will be found by searching up the file system. `.prettierignore` files are only found from the repository root and the working directory that the command was executed from.
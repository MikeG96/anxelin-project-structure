<h1 align="center">Welcome to anxelin-project-structure 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/MikeG96/anxelin-project-structure/#README" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Create a project structure for an Angular project

### 🏠 [Homepage](https://github.com/MikeG96/anxelin-project-structure/#README)

## Install

```sh
npm ci
```

## Current test

```sh
npm run build:watch
```

```sh
schematics .:anxelin-project-structure
```

## Run tests

```sh
npm run test
```

## Documentation

## How to use in your Angular project?

```sh
ng g anxelin-project-structure:<SCHEMATIC_OPTION>
```

## Schematic Options

### aps

```sh
ng g anxelin-project-structure:aps
```

Creates a folder structure for an Angular project.

```
📦src
 ┣ 📂app
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┣ 📂pages
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┗ 📂shared
 ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┣ 📂interceptors
 ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┗ 📂utilities
 ┃ ┃ ┃ ┗ 📜.gitkeep
 ┣ 📂assets
 ┃ ┗ 📂styles
 ┃ ┃ ┗ 📜.gitkeep
```

### cpg

```sh
ng g anxelin-project-structure:cpg
```

Creates a prettierrc file configuration

```json
{
  "semi": true,
  "singleQuote": true,
  "proseWrap": "always"
}
```

### chac

```sh
ng g anxelin-project-structure:chac
```

Create files to autogeneration CHANGELOG and validate commits with
[`Conventional Commits`](https://www.conventionalcommits.org/en/v1.0.0/).

### Steps to configure

You need to install the following dependencies.

Run in a terminal

```sh
npm install husky && npm install @commitlint/config-conventional && npm i --save-dev standard-version
```

We need install globally `@commitlint/config-conventional` and `commitlint/cli`. 

```sh
 npm install @commitlint/config-conventional @commitlint/cli -g
 ```

Add the following `scripts` in your `package.json`

```json
{
  "scripts": {
    // ...
    "release": "standard-version",
    "release:minor": "standard-version --release-as minor",
    "release:patch": "standard-version --release-as patch",
    "release:major": "standard-version --release-as major"
  }
}
```

### First release

Run in a terminal

```sh
npm run release -- --first-release

# Output
> standard-version "--first-release"

✖ skip version bump on first release
✔ created CHANGELOG.md
✔ outputting changes to CHANGELOG.md
✔ committing CHANGELOG.md
✔ tagging release v0.0.0
ℹ Run `git push --follow-tags origin master` to publish
```

Finally you can check your autogenerate `CHANGELOG`.

## Author

👤 **mikeg96 (https://github.com/MikeG96)**

- Website: https://anxelin.dev
- Github: [@mikeg96](https://github.com/mikeg96)
- LinkedIn: [@malgarcia](https://linkedin.com/in/malgarcia)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check
[issues page](https://github.com/MikeG96/anxelin-project-structure/issues).

## Donate

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=866QFDYAF5F5W&source=url)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by
[readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

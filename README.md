<h1 align="center">Welcome to tsx-watch 👋</h1>

> Simple tool to run a command when a file changes for [tsx watch](https://github.com/privatenumber/tsx#watch-mode)

## Usage

### Install


```sh
npx jsr add @jellydn/tsw-watch
```

More usage at [@jellydn/tsw-watch - JSR](https://jsr.io/@jellydn/tsw-watch@0.1.0)

### Run file and automatically rerun on changes:

```sh
tsx-watch ./file.ts
```


### Ignore files from watch
To exclude files from being watched, pass in a path or glob to the --ignore flag:

```sh
tsx-watch --ignore ./ignore-me.js --ignore ./ignore-me-too.js ./file.ts
```

### Re-run command on change

```sh
tsx-watch --on-change "npm run build" ./file.ts
```

## Author

👤 **Huynh Duc Dung**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)


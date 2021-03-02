# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

如果我们想使用入口文件，可以在page目录下添加document.ejs

# 优化

## 1、lodash

> `lodash`这个包我们通过cdn的方式引入script，可以极大的减少lodash体积

```js
externals: {
  lodash: "_",
},
headScripts: [
  "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.20/lodash.min.js",
],
```


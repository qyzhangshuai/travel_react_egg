# server

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org

### 如何杀掉服务器的进程

```js
1. ps -ef|grep xxx

2. kill -s 9 15134

15134 是ps -ef 得到的进程号
```

### 运行环境
```markdown
EGG_SERVER_ENV=prod 对应 config/config.prod.js 文件
```

### 目录结构

>  详见[egg目录结构](https://eggjs.org/zh-cn/basics/structure.html)

### 安装数据库

```js
yarn add egg-sequelize mysql2
```

- 在navicat中创建表

  ```js
  mysql -u root -e 'CREATE DATABASE IF NOT EXISTS `egg_house`;'
  ```

### 配置协作开发表

- [sequelize-cli](https://eggjs.org/zh-cn/tutorials/sequelize.html#%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8C-migrations)

```js
yarn add sequelize-cli -D
```

- 初始化 Migrations 配置文件和目录

  - ```js
    npx sequelize init:config
    npx sequelize init:migrations
    ```

- Migration 文件来创建我们的一个 user表

  ```js
  npx sequelize migration:generate --name=init-user
  ```

- 执行 migrate 进行数据库变更

  ```js
  npx sequelize db:migrate
  ```

  
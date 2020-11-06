![](https://github.com/k2works/tdd_metu/workflows/Node.js%20CI/badge.svg)

# プログラミング演習 2020

## 概要

### 目的

### 前提

| ソフトウェア | バージョン | 備考 |
| :----------- | :--------- | :--- |
| nodejs       | 10.16.3    |      |

## 構成

- [構築](#構築)
- [配置](#配置)
- [運用](#運用)
- [開発](#開発)

## 詳細

### Quick Start

```bash
npm install
npm start
```

### 構築

```bash
npm init -y
npm install --save-dev browser-sync jest @babel/core @babel/cli @babel/preset-env @babel/register
npm install --save-dev npm-run-all watch foreman cpx rimraf marked
npm install webpack webpack-cli html-webpack-plugin --save-dev
touch Procfile
npm install cypress
npm install --save-dev cypress-cucumber-preprocessor
npm install --save express uuid
npm install --save-dev typescript jest ts-jest @types/jest @types/express
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
```

**[⬆ back to top](#構成)**

### 配置

```bash
npm i -g vercel
npm run deploy
```

**[⬆ back to top](#構成)**

### 運用

```bash
npm run deploy
```

**[⬆ back to top](#構成)**

### 開発

```bash
npm start
```

**[⬆ back to top](#構成)**

## 参照

- [Vercel](https://vercel.com/)
- [webpack](https://webpack.js.org/)
- [GitHub Actions でステータスバッジを表示する](https://qiita.com/SnowCait/items/487d70b342ffbe2f33d8)
- [cypress](https://www.cypress.io/)
- [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- [１００番目までのフィボナッチ数列](http://www.suguru.jp/Fibonacci/Fib100.html)
- [Using Express.js with Vercel](https://vercel.com/guides/using-express-with-vercel)
- [TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/)

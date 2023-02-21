# Vite
[Vite公式サイト](https://ja.vitejs.dev/)  
## Usage
プロジェクト初期化  

```
npm create vite@latest
```

現在のディレクトリに構築する場合は Project name を「.」にする。  
設定ファイルは「vite.config.js」を作成する。  

### コマンド
- dev
  - 開発用
- preview
  - ビルドファイルの確認用（buildした結果のプレビュー）
- build
  - 公開用

## rootディレクトリを設定する
開発ファイルを /src/ 配下にまとめたい。  
元のルートディレクトリに project を作成して、projectをrootに設定する。  
outDirはrootのindex.html基準なので、../distとする。  

```
import { defineConfig } from "vite";

export default defineConfig({
  root: "project",
  base: "/",
  publicDir: "public",
  build: {
    outDir: "../dist"
  }
});
```

##  IE11対応
@vitejs/plugin-legacy を使う。  
@vitejs/plugin-legacy と terser をインストールする。  

```
npm i -D @vitejs/plugin-legacy terser
```

```
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["ie >= 11"],
    }),
  ]
});
```

## SCSS環境構築
sass と autoprefixer をインストールする。  
ルートディレクトリに.browserslistrcを作成する。  

```
npm i -D sass autoprefixer
```

```
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  }
});
```
# memo

## コンポーネント作成手順

Atomic Desginで実装するため、各パーツ単位に以下のフォルダ構成とする。

フォルダ名/  
  ├index.js (メインとなる処理をここに記述)  
  ├styles.module.css (material-uiを使わずに実装する場合に必要)  
  ├indes.stories.css (storybook用のファイル)  

### CSSの記述方法
#### material-uiのコンポーネントにcssを適用する方法
[公式サイト](https://material-ui.com/styles/basics/)

index.jsに以下の記述を行う。(必要な箇所のみ記載)
```javascript
// インポート
import { makeStyles } from '@material-ui/core/styles';

// style設定
const useStyles = makeStyles({
  root: {
    color: 'white',
    padding: '0 50px',
  },
})

// コンポーネント設定
const MyComponent = ({
  ...props
}) => {
  const classes = useStyles();
  return (
    <MyComponent
      className={classes.root}
    >
    </MyComponent>
  );
};
```

#### 自前で実装したコンポーネントにCSSを適用する方法
css-moduleを適用する。  
[参考サイト](https://kapu-kapu.hatenablog.com/entry/2018/11/19/132655)  
ExampleCssModuleコンポーネントを参照

### storybookにコンポーネントを追加する方法
コンポーネントのファイル直下に.stories.jsファイルを作成する。

```javascript
import React from 'react';

import MyComponent from './index'; // 対象のコンポーネントを読み込む

// sotrybookの設定
export default {
  title: 'targetFolder/MyComponent', // フォルダ名/コンポーネント名
  component: MyComponent, // 読み込むコンポーネント
}

// テンプレート作成
const Template = (args) => <MyTextField {...args} />;

// 各ストーリーの作成
export const basic = Template.bind({});
basic.args = {
  label: 'basic',
}
```

### jest用のファイルを作成する方法
コンポーネントのファイル直下に.test.jsファイルを作成する。

よくわからないけど以下の作業を実施したら動いた。後できちんと勉強する。

1. @babel/preset-reactのインストール
```
npm install --save-dev @babel/preset-react
```

2. @babel/preset-envのインストール
```
npm install --save-dev @babel/preset-env
```

3. .babelrcの作成
以下内容を記述
```
{
  "presets": ["@babel/preset-react"],
  "env": {
    "test": {
      "presets": [
        ["@babel/preset-env", {
            "targets": {
              "node": "current"
           }
        }]
      ]
    }
  }
}
```

4. テスト実行
```
npm run test-jest
```
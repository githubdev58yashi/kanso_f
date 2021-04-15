 import { fade } from "@material-ui/core";
 import myTheme from '../../../myTheme';
;
 // style設定
 const useStyles= {
   search: {
     // 色
     color: '#000000',
     // アイコンとフィールドを横並びにする
     display: 'flex',
     // 角丸
     borderRadius: `${myTheme.shape.borderRadius}px`,
     // 背景色
     backgroundColor: `${fade(myTheme.palette.common.white, 0.85)}` ,
     '&:hover': {
       backgroundColor: `${fade(myTheme.palette.common.white, 0.95)}`,
     },
     // マージン
     marginRight: `${myTheme.spacing(2)}px`,
     marginLeft: '0',
     // 幅
     width: '100%',
   },
   // 検索アイコン
   searchIcon: {
     // パディング
     padding: `${myTheme.spacing(0, 2)}`,
     // ポインター
     cursor: 'pointer',
     // 中央寄せ
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   },
   // 検索フィールド（ルート）
   inputRoot: {
     // 色
     color: '#000000',
     // 幅
     width: '100%',
   },
   // 検索フィールド
   inputInput: {
     // パディング
     padding: `${myTheme.spacing(0, 1, 0, 1)}`,
     // 幅
     width: '100%',
   },
   iconButton: {
     padding: 0,
   }
  };
 
 export default useStyles;
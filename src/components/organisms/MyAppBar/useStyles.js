import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // アプリバー
  root: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuIcon: {
    display: "inline",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBarSectionDesktop: {
    display: "none",
    // 'sm' 600px
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },

  // ドロワー（モバイル）
  drawerSectionMobile: {
    display: "none",
  },
  drawerPaperSectionMobile: {
    paddingLeft: `${theme.spacing(1)}px`,
    paddingRight: `${theme.spacing(1)}px`,
  },

  // ドロワー（デスクトップ）
  drawerSectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline",
    },
    width: drawerWidth,
  },
  drawerPaperSectionDesktop: {
    paddingLeft: `${theme.spacing(1)}px`,
    paddingRight: `${theme.spacing(1)}px`,
    width: drawerWidth,
  },
  drawerSectionDesktopTitleRoot: {
    // appBarと高さを合わせる
    paddingTop: "2px",
    paddingBottom: "1px",
  },
  drawerSectionDesktopTitle: {
    fontSize: "34px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },

  // 「感想を書く」ボタン
  writeImpressionButton: {
    color:"#000",
    backgroundColor: theme.palette.secondary.buttonColor,
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: "rgba(149, 0, 174, 0.5)",
    },
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
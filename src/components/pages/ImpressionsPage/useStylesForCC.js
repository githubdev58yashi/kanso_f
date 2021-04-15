import myTheme from '../../../myTheme';

const appBarHeight = 64;
const bottomNavigationHeight = 64;
const drawerWidth = 240;

const useStylesForCC = {
  main: {
    marginTop: appBarHeight,
    [myTheme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  },
  addFab: {
    color: "#000",
    backgroundColor: "rgb(206, 149, 200)",
    position: "fixed",
    bottom: `${bottomNavigationHeight + myTheme.spacing(2)}px`,
    right: myTheme.spacing(2),
    "&:hover": {
      backgroundColor: "rgba(149, 0, 174, 0.5)",
    },
    "&:clicked": {
      backgroundColor: "rgba(149, 0, 174, 0.5)",
    },
    [myTheme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  pagination: {
    marginTop: "48px",
    marginBottom: "144px",
    display: "flex",
    justifyContent: "center",
  },
  impression: {
    marginBottom: `${myTheme.spacing(2)}px`,
  },
}

export default useStylesForCC;
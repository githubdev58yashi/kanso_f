import myTheme from '../../../myTheme';

const appBarHeight = 64;
const bottomNavigationHeight = 64;
const drawerWidth = 240;

const useStylesForCC = {
  impression: {
    marginBottom: `${myTheme.spacing(2)}px`,
  },
  main: {
    marginTop: appBarHeight,
    [myTheme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  ratingAndUpdateDate: {
    display: "flex",
    justifyContent:"space-between",
    marginTop: `${myTheme.spacing(1)}px`,
  },
  updateDate: {
    color: "gray",
  },
  text: {
    marginTop: `${myTheme.spacing(2)}px`,
  },
  mySelfField: {
    display: "none",
    [myTheme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
      "& > button": {
        marginLeft: `${myTheme.spacing(1)}px`,
      }
    },
  }
}

export default useStylesForCC;
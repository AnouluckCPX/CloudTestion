import { DM_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap"
});

const theme = createTheme({
  components: {
    // MuiDrawer: {
    //   styleOverrides: {
    //     paper: {
    //       backgroundImage: 'url("/static/img/background_menu.jpg")',
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "bottom",
    //       width: drawerWidth,
    //     },
    //   },
    // },
    // MuiAlert: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       ...(ownerState.severity === "info" && {
    //         backgroundColor: "#60a5fa",
    //       }),
    //     }),
    //   },
    // },
  },
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  spacing: 8,
  palette: {
    mode: "light",
    // primary: process.env.NEXT_PUBLIC_IS_PRODUCTION == "1" ? red : blue,
    background: {
      default: "#FFF",
    },
  },
});

export default theme;

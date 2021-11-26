import {createTheme} from "@material-ui/core";
import {blue, grey} from "@material-ui/core/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
            grey: grey[100],
        },
    },
    myButton: {
        backgroundColor: "red",
        color: "white",
        border: "1px solid black"
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 660,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    }
})
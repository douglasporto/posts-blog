import { PaletteMode } from "@mui/material";

const primaryDark = '#6a1b9a';
const primaryLight = '#4a148c';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: primaryLight,
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: primaryDark,
          },
        })
  }
})

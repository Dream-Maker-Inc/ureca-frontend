import { findTheme, ThemeTypes } from "@/ui/themes/CustomThemes";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import "./_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;

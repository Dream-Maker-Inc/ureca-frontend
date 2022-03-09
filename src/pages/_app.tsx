import { findTheme, ThemeTypes } from "@/themes/CustomThemes";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import "@/common/styles/globals.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

import { findTheme, ThemeTypes } from "@/ui/themes/CustomThemes";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import "./_app.css";
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

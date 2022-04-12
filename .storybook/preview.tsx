import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
// Next/Image 사용 설정
import * as NextImage from "next/image";
import { RecoilRoot } from "recoil";
import "../src/common/styles/globals.css";
import { findTheme, ThemeTypes } from "../src/themes/CustomThemes";
import { QueryClient, QueryClientProvider } from "react-query";

const defaultTheme = findTheme(ThemeTypes.Light);

const queryClient = new QueryClient();

const withProviders = (Story, context) => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <EmotionThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={defaultTheme}>
          <Story {...context} />
        </ThemeProvider>
      </EmotionThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);

export const decorators = [withProviders];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

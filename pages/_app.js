import "../styles/globals.css";
import { TestProvider } from "./context/TestContext";
import { ThemeProvider } from "./context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <TestProvider>
        <Component {...pageProps} />
      </TestProvider>
    </ThemeProvider>
  );
}

export default MyApp;

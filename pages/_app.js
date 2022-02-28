import { TestProvider } from "../context/TestContext";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";

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

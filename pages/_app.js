import { TestProvider } from "../context/TestContext";
import { ThemeProvider } from "../context/ThemeContext";
import { UserProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <TestProvider>
          <Component {...pageProps} />
        </TestProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;

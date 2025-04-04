import Home from "./pages/Home";
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from './context/ThemeContext';
import i18n from './i18n';

function App() {

  return (
    <>
    <I18nextProvider i18n={i18n}>
    <ThemeProvider>
      <Home />
      </ThemeProvider>
    </I18nextProvider>
    </>
  )
}

export default App
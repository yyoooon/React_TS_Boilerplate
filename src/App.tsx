import { GlobalStyle, theme } from '@/style';
import { ThemeProvider } from '@emotion/react';
import { CarListPage } from '@/pages';
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={} />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;

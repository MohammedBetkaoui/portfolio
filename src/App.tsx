import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import MainContent from './components/layout/MainContent';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <MainContent />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
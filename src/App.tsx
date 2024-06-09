import React from 'react';
import './App.css';
import './styles.css';
import { TemplateProvider } from './providers/TemplateProvider';
import { Home } from './pages/Home';

function App() {
  return (
    <TemplateProvider>
      <div className='App'>
        <Home />
      </div>
    </TemplateProvider>
  );
}

export default App;

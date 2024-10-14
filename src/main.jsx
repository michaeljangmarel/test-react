import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Card from './components/Card.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TestComponent from './data/TestComponent.jsx';
import TitleComponent from './dynamic-title/TitleComponent.jsx';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrapping the entire app with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <HelmetProvider>
      <Routes>
          <Route path='/' element={<TestComponent/>} />
          <Route path='/card' element={<Card />} />
          <Route path='/title' element={<TitleComponent/>} />
        </Routes>
        <App /> {/* Or you can place the <App /> inside Routes */}
      </HelmetProvider>
        {/* Setting up your routes */}
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Card from './components/Card.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 import { HelmetProvider } from 'react-helmet-async';
import Test from './components/Test.jsx';
import Style from './components/Style.jsx';
import FormData from './components/Form.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrapping the entire app with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <HelmetProvider>
      <Routes>
          {/* <Route path='/' element={<TestComponent/>} /> */}
          <Route path='/card' element={<Card />} />
          <Route path='/sty' element={<Style />} />
          <Route path='/test' element={<Test/>} />
          <Route path='/form' element={<FormData/>} />
        </Routes>
        <App /> {/* Or you can place the <App /> inside Routes */}
      </HelmetProvider>
        {/* Setting up your routes */}
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);

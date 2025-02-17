import { createRoot } from 'react-dom/client';
import '../index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalState from '../context/Context';

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
    <GlobalState>
    <App/>


    </GlobalState>
    </BrowserRouter>

   
);
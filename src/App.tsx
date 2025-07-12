import { BrowserRouter } from 'react-router';
import { Router } from '@/app/router/Router';
import { CardProvider } from './entities/cards';

import './App.css';
import { UserProvider } from './entities/user';

function App() {
  return (
    <BrowserRouter>
      <CardProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </CardProvider>
    </BrowserRouter>
  );
}

export default App;

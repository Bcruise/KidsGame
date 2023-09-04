import '../styling/firstPage.css';
import { useState } from 'react';
import Login from '../components/login.js';
import Register from '../components/register';
import Game from '../components/game';

function FirstPage() {
    const [loginOrRegister, setLoginOrRegister] = useState('login');

    /*{loginOrRegister === 'login' ? 
            (<Login setLoginOrRegister={setLoginOrRegister}/>)
            :
            (<Register />)
        }*/
        
        
  return (
    <div>
      <Game />
        
    </div>
  );
}

export default FirstPage;
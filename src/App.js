import { useEffect, useState } from 'react';
import './App.scss';
import Home from './page/home/Home';
import Register from './page/authfolder/register';
import Login  from "./page/authfolder/login"

function App() {
  const [login, isLogin] = useState(false)

  useEffect(() => {
    isLogin(true)
  })

  return (
    <div>
      {
        login ?
        (
          <Home />
          ) : (
            <Login />
        )
      }
    </div>
  );
}

export default App;

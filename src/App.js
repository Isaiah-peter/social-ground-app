import './App.scss';
import Topbar from './component/topbar';
import Login from './page/authfolder/login';
import Register from './page/authfolder/register';

function App() {
  return (
  <div className="app">
    <Topbar />
    <Login />
  </div>
  );
}

export default App;

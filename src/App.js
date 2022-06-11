import './App.scss';
import Sidebar from './component/Sidebars/Sidebar';
import Topbar from './component/Topbar/topbar';
import Login from './page/authfolder/login';
import Register from './page/authfolder/register';

function App() {
  return (
  <div className="container-fluid panel-body custom-body">
    <Topbar />
    <Sidebar />
  </div>
  );
}

export default App;

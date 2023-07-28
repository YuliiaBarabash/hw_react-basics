import './App.css';
// eslint-disable-next-line no-unused-vars
import Header from '../../components/Header/header';
import Aside from '../../components/Aside/aside';
import Main from '../../components/Main/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Aside/><Main/>
    </div>
  );
}

export default App;

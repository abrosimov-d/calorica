import './App.css';
import Listview from './components/Listview';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Back from './back/back';


function App() {
  const data = [
    'line1', 'line2', 'line3', 'line4', 'line5', 'line6', 'line7',
  ];

  const back = new Back();

  return (
  <div className="app">
      <Header/>
      <Toolbar/>
      <Listview data={data}/>
    </div>
  );
}

export default App;

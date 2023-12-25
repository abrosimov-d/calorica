import './App.css';
import Listview from './components/Listview';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Back from './back/back';
import { useState } from "react";

function App() {

  const [date, setDate] = useState(new Date());
  let [data, setData] = useState([]);

  const back = new Back();

  function onClick(e) {
    setDate(addDays(date, parseInt(e.target.value)));
    data = back.request(date);
    setData(data);
  }

	function addDays(date, days) {
		let result = new Date(date);
		result.setDate(result.getDate() + days)
		return result;
	}

  return (
  <div className="app">
      <Header/>
      <Toolbar onClick={onClick} date={date}/>
      <Listview data={data} />
    </div>
  );
}

export default App;

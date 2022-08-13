import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurants/:name/:id" element={<RestaurantDetails/>}/>

      </Routes>
    </Router>
     
    
  );
}

export default App;

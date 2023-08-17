import AllCountries from './AllCountries';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
 <div className='flex '>
  <div className='w-[15%]'>
    <Sidebar />
  </div>
  <div className='w-[85%]'>
    <AllCountries />
  </div>
     
 </div>
    </div>
  );
}

export default App;

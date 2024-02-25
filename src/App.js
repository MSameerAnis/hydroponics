
import { Routes , Route} from 'react-router-dom';

import About from './component/About';
import Reading from './component/Reading';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Working from './component/Working';
import Team from './component/Team';
import Contact from './component/Contact';
function App() {
  return (


    
    <div >


<Navbar />


<Routes>  


  <Route path='home'element={<Home />} />

  <Route path='about' element={<About />} / >
    <Route path='working' element={<Working />} />
    <Route path='contact' element={<Contact />} />
    <Route path='reading' element={<Reading />} />

    <Route path='team' element={<Team />} />




</Routes>

















     
    </div>
  );
}

export default App;

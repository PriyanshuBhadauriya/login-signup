import Signup from './components/Signup';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/page/Login';
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route  index element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    
    </>
      
    
  );
}

export default App;

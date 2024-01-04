import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from './pages/LoginSignUp';
import SignUp from './pages/SignUp';

// import SignUp  from './components/signUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginSignUp/>}/>
      <Route path='/signup' element={<SignUp/>}/>
     
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;

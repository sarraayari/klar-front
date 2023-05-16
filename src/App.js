
import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './Components/Footer';
import Teacher from './Components/Teachers';
import Student from './Components/Students';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from './Components/Home';
import AlertMessage from '../src/Components/AlertMessage';
import Login from './Components/Login';
import DB_teacher from './Components/DB_teacher';
import DB_student from './Components/DB_student';
import DB_contact from './Components/DB_contact';
function App() {
 
  return (
    <div className='App'>
    
    

      <BrowserRouter>
      
      <Routes> 
      <Route exact path='/' element={<Home/>} ></Route> 
      <Route exact path='/Home' element={<Home/>} ></Route>  
       <Route exact path='/Student' element={<Student/>} ></Route>
       <Route exact path='/Teacher' element={<Teacher/>} ></Route>
       <Route exact path='/AlertMessage' element={<AlertMessage/>} ></Route>
       <Route exact path='/Login' element={<Login/>} ></Route>
       <Route exact path='/DB_student' element={<DB_student/>} ></Route>
       <Route exact path='/DB_contact' element={<DB_contact/>} ></Route>
       <Route exact path='/DB_teacher' element={<DB_teacher/>} ></Route>
    
      </Routes>
      </BrowserRouter>  

      
      <Footer/>
      </div>
      
      
    
  );
}
export default App; 



import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/Footer';
import Teacher from './Components/Teachers';
import Student from './Components/Students';
import Home from './Components/Home';
import AlertMessage from './Components/AlertMessage';
import Login from './Components/Login';
import DB_teacher from './Components/DB_teacher';
import DB_student from './Components/DB_student';
import DB_contact from './Components/DB_contact';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          {/* <Route path='/About' element={<Home />} />
          <Route path='/Contact' element={<Home />} /> */}
          <Route path='/Student' element={<Student />} />
          <Route path='/Teacher' element={<Teacher />} />
          <Route path='/AlertMessage' element={<AlertMessage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/DB_student' element={<DB_student />} />
          <Route path='/DB_contact' element={<DB_contact />} />
          <Route path='/DB_teacher' element={<DB_teacher />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

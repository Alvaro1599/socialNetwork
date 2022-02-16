import React from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Login/Register';

function App() {
  const [modal, setModal] = React.useState(false)
  return (
    <div className="App text-white flex justify-center items-center bg-primary-strong w-full h-screen ">
      <Home modal={modal} setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;

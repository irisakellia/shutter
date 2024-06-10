import React from 'react';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Get from './components/Get';
import Form from './components/Form';
import Make from './components/Make';
import Need from './components/Need';
import Interest from './components/Interest';

function App() {
 

  return (
    <div>
      <div className="fixed">
        <Title />
      </div>
      <Navbar />
      <Get />
      <Form />
      <Make />
      <Need/>
      <Interest/>
    </div>
  );
}

export default App;

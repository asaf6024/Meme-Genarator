import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator'
import Header from './components/Header'
import Container from './components/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {

  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <MemeGenerator />
      <Footer />
      {/* <Container/> */}
    </div>
  )
}




export default App


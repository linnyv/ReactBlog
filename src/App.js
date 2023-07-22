import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Article />
      </main>
      <Footer />
    </div>
  );
}

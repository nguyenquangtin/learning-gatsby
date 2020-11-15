import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <p> This is the content</p>
      <Footer />
    </div>
  );
}

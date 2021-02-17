import React from 'react';
import Header from './Header';
import Footer from './Footer';
/**
 * Default site layout component
 */
const DefaultLayout = ({ wrapperClass, menuDoc, children }) => {
  return (
    <div className={wrapperClass}>
      <Header menuDoc={menuDoc} />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
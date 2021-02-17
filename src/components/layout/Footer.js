import React from 'react';

/**
 * Site footer component
 */
const Footer = () => (
  <footer>
    <section className="topfooter">
        <div className="column">
          <h2>Jay's Cookies</h2>
          Fenham, Newcastle<br/>
          <a href="tel:07477139905">07477139905</a>
        </div>
        <div className="column">
          <a href="instagram.com"><img alt="Instagram" src="/images/instagram.svg" /></a>
        </div>
    </section>
    <section className="subfooter">
    Proudly Developed by <a href="https://instagram.com/beni.sinca" target="_blank" rel="noopener noreferrer">Beni Sinca</a> and published with &nbsp;
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">Prismic</a>
      <br />
    </section>
  </footer>
);

export default Footer;
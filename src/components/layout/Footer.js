import React from 'react';

/**
 * Site footer component
 */
const Footer = () => (
  <footer>
    <section className="topfooter">
        <div className="column">
          <h2>Jay's Cookies</h2>
              Newcastle<br/>
        </div>
        <div className="column">
          <a href="https://www.instagram.com/jayscookies.co.uk/"><img alt="Instagram" src="/images/instagram.svg" /></a>
        </div>
    </section>
    <section className="subfooter">
    Proudly Developed by <a href="https://instagram.com/benisinca" target="_blank" rel="noopener noreferrer">Beni Sinca</a> and published with &nbsp;
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">Prismic</a>
      <br />
    </section>
  </footer>
);

export default Footer;
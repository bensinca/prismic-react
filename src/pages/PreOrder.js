import React, { useEffect, useState } from 'react';
import { DefaultLayout } from '../components';
import NotFound from './NotFound';
import { client } from '../utils/prismicHelpers';

const PreOrder = () => (
  <div>
    <div className="pre-order-coming-soon">
      <h1>PreOrder for MAYDAY</h1> 
    </div>
      <div className="iframe-container">
        <iframe
        id="JotFormIFrame-211146167343349"
        title="MAYDAY Campaign"
        className="pre-order-iframe"
        onLoad={window.parent.scrollTo(0,0)}
        allowFullScreen={true}
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/211146167343349"
        frameBorder="0"
        scrolling="no"
        >
        </iframe>
    </div>
  </div>
)

/**
 * Website page component
 */
const PreOrderPage = () => {
  const [prismicData, setPrismicData] = useState({ menuDoc: null });
  const [notFound, toggleNotFound] = useState(false);

  // Get the page document from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const menuDoc = await client.getSingle('menu');
  
        if (menuDoc) {
          setPrismicData({ menuDoc });
        } else {
          console.warn('Page document was not found.');
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    }
    fetchPrismicData();

    // Load new page at the top (when linking from the middle of another page)
    window.scrollTo(0, 0);
  }, []);

  // Return the page if a document was retrieved from Prismic
  if (prismicData.menuDoc) {
    const menuDoc = prismicData.menuDoc;

    return (
      <DefaultLayout
        wrapperClass="page preorder"
        menuDoc={menuDoc}
      >
        <PreOrder />
      </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
}

export default PreOrderPage
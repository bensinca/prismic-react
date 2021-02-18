import React, { useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';

import { DefaultLayout, BackButton, SliceZone } from '../components';
import NotFound from './NotFound';
import { client } from '../utils/prismicHelpers';

/**
 * Blog post page component
 */
const Post = ({ match }) => {
  const [prismicData, setprismicData] = useState({ doc: null, menuDoc: null });
  const [notFound, toggleNotFound] = useState(false);

  const uid = match.params.uid;

  // Get the blog post document from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const doc = await client.getByUID('post', uid);
        const menuDoc = await client.getSingle('menu');

        if (doc) {
          setprismicData({ doc, menuDoc });
        } else {
          console.warn('Blog post document was not found. Make sure it exists in your Prismic repository');
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    }

    fetchPrismicData();
  }, [uid]);

  // Return the page if a document was retrieved from Prismic
  if (prismicData.doc) {
    const doc = prismicData.doc;
    const title = doc.data.title.length !== 0 ?
      RichText.asText(doc.data.title) :
      'Untitled';
      const menuDoc = prismicData.menuDoc;

    return (
      <DefaultLayout wrapperClass="main post" seoTitle={title} menuDoc={menuDoc}>
        <div className="outer-container">
          <BackButton />
          <h1>{title}</h1>
        </div>
        <SliceZone sliceZone={doc.data.body} />
      </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
}

export default Post;

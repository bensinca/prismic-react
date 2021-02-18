import React, { useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Prismic from '@prismicio/client';

import { BlogHeader, PostList, DefaultLayout } from '../components';
import NotFound from './NotFound';
import { client } from '../utils/prismicHelpers';

/**  
 * Blog homepage component
 */
const BlogHome = () => {
  const [prismicData, setPrismicData] = useState({ blogDoc: null, blogPosts: null,  menuDoc: null });
  const [notFound, toggleNotFound] = useState(false);

  // Get the blog post documents from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const blogDoc = await client.getSingle('blog');
        const blogPosts = await client.query(
          Prismic.Predicates.at('document.type', 'post'),
          { orderings: '[my.post.date desc]' }
        );
        const menuDoc = await client.getSingle('menu');
  
        if (blogDoc) {
          setPrismicData({ blogDoc, blogPosts: blogPosts.results, menuDoc });
        } else {
          console.warn('Blog Home document was not found. Make sure it exists in your Prismic repository');
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    }

    fetchPrismicData();
  }, []);

  // Return the page if a document was retrieved from Prismic
  if (prismicData.blogDoc) {
    const blogDoc = prismicData.blogDoc;
    const blogPosts = prismicData.blogPosts;
    const title = RichText.asText(blogDoc.data.headline);
    const menuDoc = prismicData.menuDoc;

    return (
      <DefaultLayout
        seoTitle={title}
        wrapperClass="blog-home"
        menuDoc={menuDoc}
        >
        <BlogHeader
          image={blogDoc.data.image}
          headline={blogDoc.data.headline}
          description={blogDoc.data.description}
        />
        <PostList posts={blogPosts} />
      </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
}

export default BlogHome;

import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink } from './prismic-elements';

/**
 * Homepage banner component
 */
const HomepageBanner = ({ banner }) => (
  <section
    className="homepage-banner"
    style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / 56%), transparent), url(${banner.image.url})` }}
  >
    <video width="440px" loop="true" autoplay="autoplay" muted>
      <source src="images/video.mp4" type="video/mp4" />
    </video>
    <div className="banner-content">
      <h1 className="banner-title">
        {RichText.asText(banner.title)}
      </h1>
      <p className="banner-description">
        {RichText.asText(banner.tagline)}
      </p>
      <PrismicLink
        link={banner.button_link}
        linkClass="banner-button"
      >
        {RichText.asText(banner.button_label)}
        <svg className="link__graphic link__graphic--stroke link__graphic--arc" width="100%" height="18" viewBox="0 0 59 18">
          <path d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842" pathLength="1"/>
        </svg>
      </PrismicLink>
    </div>
  </section>
);

export default HomepageBanner;
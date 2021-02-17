import React from 'react'

const PreOrder = () => (
    <div className="iframe-container">
        <iframe
        id="JotFormIFrame-210454210858047"
        title="Stripe Form"
        className="pre-order-iframe"
        onLoad={window.parent.scrollTo(0,0)}
        allowFullScreen={true}
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/210454210858047"
        frameBorder="0"
        scrolling="no"
        >
        </iframe>
    </div>
)



export default PreOrder
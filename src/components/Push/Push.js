import React from 'react'
import './push.css'

const Push = (props) => {
  console.log(props)
    const {
        editoText,
        CTAText,
        CTALink,
        imageURL,
        extraClasses = '',
    } = props

    return (
      <>
        <div className={`push ${extraClasses}`}>
            <div className="section__content">
              <div className="push-editorial   is-portrait">
                  <div className="push-editorial__container">
                    <div className="push-editorial__row">
                        <div className="push-editorial__text ">
                          <div className="context has-text-left   js-propagate-link-target js-propagate-link unstyled">
                              {editoText ?? ''}
                              <p className="text-block-paragraph">
                                <span>
                                  <a href={CTALink} 
                                      className="link has-icon is-cta is-reversed is-left  is-reversed button is-tertiary is-black" 
                                      target="_blank" 
                                      data-event-label="book an appointment">
                                      <span>
                                          <span className="medium-push__wrapper">{CTAText}</span>
                                      </span>
                                  </a>
                                </span>
                              </p>
                          </div>
                        </div>
                        <figure className="push-editorial__image  js-propagate-link-target js-propagate-link">
                          <img 
                              src={imageURL} 
                              loading="lazy" 
                          />
                        </figure>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </>
    )
}

export default Push
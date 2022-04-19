import React from 'react'
import './push.css'

const Push = (props) => {
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
            <div class="section__content">
              <div class="push-editorial   is-portrait">
                  <div class="push-editorial__container">
                    <div class="push-editorial__row">
                        <div class="push-editorial__text ">
                          <div class="context has-text-left   js-propagate-link-target js-propagate-link unstyled">
                              {editoText ?? ''}
                              <p class="text-block-paragraph">
                                <span>
                                  <a href={CTALink} 
                                      class="link has-icon is-cta is-reversed is-left  is-reversed button is-tertiary is-black" 
                                      target="_blank" 
                                      data-event-label="book an appointment">
                                      <span>
                                          <span class="medium-push__wrapper">{CTAText}</span>
                                      </span>
                                  </a>
                                </span>
                              </p>
                          </div>
                        </div>
                        <figure class="push-editorial__image  js-propagate-link-target js-propagate-link">
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
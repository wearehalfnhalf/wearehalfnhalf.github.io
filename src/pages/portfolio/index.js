import React, { useState } from 'react'
import './style.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Container } from 'react-bootstrap'
import { dataportfolio, meta } from '../../content_option'

export const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        {dataportfolio.map((data, i) => {
          return (
            <div key={i} className="po_item" onClick={() => handleClick(i)}>
              <img src={data.img} alt="" />
              <div className={`content ${activeIndex === i ? 'show' : ''}`}>
                <h1>{data.title}</h1>
                <p>
                  <b>Cast & Crew:</b> {data.crew}
                </p>
                {/* Add target="_blank" to open in a new tab, if desired */}
                <a href={data.link} rel="noopener noreferrer">
                  Watch Film
                </a>
              </div>
            </div>
          )
        })}
      </Container>
    </HelmetProvider>
  )
}

import React, { useState } from 'react';
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';





function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({})

  function createModal(data) {
    return (

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='modal-header'>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: '50%', display: "block", marginLeft: "auto", marginRight: "auto" }} />
          <a id="portfolio__modal__link" href={data.link} target="_blank" rel="noreferrer">Site</a>
          <a id="portfolio__modal__link" href={data.gitHub} target="_blank" rel="noreferrer">GitHub</a>
        </Modal.Body>

        <Modal.Footer>
          <div>Technologies used: </div>
          <p style={{ fontSize: '0.8rem', fontWeight: "bold", marginRight: 'auto' }}>{data.tech}</p>
          <Button style={{ color: "var(--font-color)", backgroundColor: "var( --background-color)", border: "1px solid var(--nav-color-hover)" }} onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const modal = createModal(tempData);

  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card key={idx} id="portfolio__card__container">
        <Image className="portfolio__image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              gitHub: e.gitHub,
              name: e.name,
              summary: e.summary,
              tech: e.tech
            })
            setModalShow(true);
          }}
          src={e.image} />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
      </Card>
    )
  })

  return (
    <div className="portfolio__main__container" id="portfolio">
      <h1>PORTFOLIO</h1>

      <Container fluid="lg" style={{ padding: '2rem 0' }}>
        <Row>
          {mapped}
        </Row>
      </Container>
      {modal}
    </div >
  )


  // const mapped = portfolioData.map((e, idx) => {
  //   return (
  //     <Card key={idx} id="portfolio__card__container">
  //       <Image className="portfolio__image"
  //         onClick={() => {


  //           setTempData({
  //             image: e.image,
  //             link: e.link,
  //             gitHub: e.gitHub,
  //             name: e.name,
  //             summary: e.summary,
  //             tech: e.tech
  //           })
  //           setModalShow(true);

  //         }}
  //         src={e.image} />
  //       <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
  //       {createModal(tempData)}


  //     </Card>
  //   )
  // })

  // return (
  //   <div className="portfolio__main__container" id="portfolio">
  //     <h1>PORTFOLIO</h1>

  //     <Container fluid="lg" style={{ padding: '2rem 0' }}>
  //       <Row>
  //         {mapped}
  //       </Row>
  //     </Container>
  //   </div >
  // )
}

export default Portfolio;
import React from 'react'

export default function Home() {
  return (
    <div>
      <article id="top" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div className="col-4 col-5-large col-12-medium">
              <span className="image fit"><img src="images/pic00.jpg" alt="" /></span>
            </div>
            <div className="col-8 col-7-large col-12-medium">
              <header>
                <h1>Hi. I'm Laura Telqiu.</h1>
              </header>
              <p>Software Engineer</p>
              <a href="#work" className="button large scrolly">Learn more about me</a>
            </div>
          </div>
        </div>
      </article>
    </div>

  )
}

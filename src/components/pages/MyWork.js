import React, { Component } from 'react'

class MyWork extends Component {
  render() {
    return (
      <React.Fragment>
        <div classNameName="dragslider">
          <h1> Test </h1>
            <section className="img-dragger img-dragger-large dragdealer">
              <div className="handle">
                <div id="slide-1" className="slide" data-content="content-1">
                  <div className="img-wrap">
                    <img src="../../build/images/Mobile_hand.jpg" alt="Emptor International" />
                  </div>
                  <h2> Emptor International
                    <span>
                      A complete website rework of a chinese transportation firm
                    </span>
                  </h2>
                  <button id="emptor-content" className="content-switch"> </button>
                </div>
                <div id="slide-2" className="slide" data-content="content-2">
                  <div className="img-wrap">
                    <img src="../../build/images/slagelseMusikhus.jpg" alt="Slagelse Musikhus" />
                  </div>
                  <h2>Slagelse Musikhus
                    <span>
                      Logo and website redesign of the local playing venue and event hosts
                    </span>
                  </h2>
                  <button id="SM-content" className="content-switch"> </button>
                </div>
                <div id="slide-3" className="slide" data-content="content-3">
                  <div className="img-wrap">
                    <img src="../../build/images/cakes.jpg" alt="Cakes By Connie" />
                  </div>
                  <h2>Cakes by Connie
                    <span>
                      Portfolio website, set up with a user friendly CRUD system, built upon Umbraco
                    </span>
                  </h2>
                  <button id="cbyc-content" className="content-switch"> </button>
                </div>
              </div>
            </section>

          <section className="pages">
            <div className="content" data-content="content-1">
              <div className="showcase-nav"></div>
              <div className="content-wrapper">
                <h1> Emptor International
                  <span className="link-website">
                    <a href="https://www.emptor-int.com/">
                      https://www.emptor-int.com/
                    </a>

                  </span>
                </h1>
                <span className="headerAndBody">
                  <h2> Background</h2>

                  <p> Emptor International A/S is an international transportation and logistics firm. They are currently operating from
                    branches in several countries, including one in Norway and the main branch in China. They're currently focused on
                    delivering election materials to customers worldwide, but is also one of the big firms dealing with trading
                    materials, machinery and other bigger deliveries.
                  </p>
                </span>
                <img className="mockUpImages" src="../../build/images/Mockup.png" alt="Mockup of Emptor" />
                <span className="headerAndBody">
                  <h2> Objectives </h2>
                  <p> The target audience of Emptor International lives within the Africa areas and China. Therefore, the main objective
                    in the rebranding of Emptor International, was to deliver a simplistic and functional website, with fast
                    loading time and timeless, minimalistic design. The biggest concern of the process, was to rethink the navigational
                    system, so that the website could offer an optimized user experience, while passing a lot of information
                    to the consumer, without feeling too compact.
                    <br />
                    <br /> As an addition to the design and coding of the website, a comprehensive SEO analysis we're performed, in
                    order to find the most valuable keywords, and boost the traffic of Emptor Internatinal.
                  </p>
                </span>
                <img className="mockUpImages" src="../../build/images/responsive.png" alt="Responsive Emptor" />
                <span className="headerAndBody">
                  <h2> Technologies </h2>
                  <p> The setup for the website was very simple and did not require a lot of different technologies. The website
                    has been set up with the standard three's: HTMl, CSS and JavaScript. Specifically jQuery was used as the Javascript
                    library. The CSS was preprocessed with SASS and compiled, using the gulp.js technology. Lastly, PHP was used
                    to handle the contact form.
                  </p>
                </span>
                <span className="icon-wrapper-mobile">
                  <img src="../../build/images/HTML.png" alt="HTML icon" className="icon" />
                  <img src="../../build/images/css.png" alt="CSS icon" className="icon" />
                  <img src="../../build/images/js.png" alt="Javascript icon" className="icon" />
                  <img src="../../build/images/php.png" alt="Php icon" className="icon" />
                  <img src="../../build/images/gulp.png" alt="Gulp icon" className="icon" />
                  <img src="../../build/images/sass.png" alt="Sass icon" className="icon" />
                </span>
                <span className="icon-wrapper">
                  <div></div>
                  <span>
                    <img src="../../build/images/HTML.png" alt="HTML icon" className="icon" />
                    <img src="../../build/images/css.png" alt="CSS icon" className="icon" />
                    <img src="../../build/images/js.png" alt="Javascript icon" className="icon" />
                    <img src="../../build/images/php.png" alt="Php icon" className="icon" />
                    <img src="../../build/images/gulp.png" alt="Gulp icon" className="icon" />
                    <img src="../../build/images/sass.png" alt="Sass icon" className="icon" />
                  </span>
                </span>
                <span className="headerAndBody">
                </span>
                <button id="emptorButton"> NEXT PROJECT </button>
              </div>
            </div>
            </section>

            <div className="content" data-content="content-2">
              <div className="showcase-nav"></div>
              <div className="content-wrapper">
                <h1> Slagelse Musikhus </h1>
                <span className="headerAndBody">
                  <h2> Background </h2>
                  <p> Slagelse Musikhus is a playing venue for upcomming musicians, as well as widely known artists. 
                      The work with Slagelse Musikhus, was in relation to our main assignment at multimedia design in EASJ.
                      The client wanted a website, which would provide an overview of all the upcomming websites 
                      and direct acess to purchase tickets for the event. Also, the client wanted all of it's essential
                      information, to be easily acessible through a userfriendly website. <br /> <br /> 

                      Lastly, the client asked for a CRUD system, which allowed them to edit, delete and add new events,
                      and keep the website up to date independently. Slagelse Musikhus is under the Slagelse commune,
                      so the site has not yet gone live yet, but is expected to do so early 2018.
                      
                  </p>
                </span>
                <img className="mockUpImages" src="../../build/images/slagelseShowcase.png" alt="Mockup of Emptor" />
                <span className="headerAndBody">
                  <h2> Objectives </h2>
                  <p> The work with Slagelse Musikhus was based around accessibility and user experience. Our job was to make the website,
                      more accessible to people with impairments. The work included making the website available in english or danish,
                      making it more navigatable, as well as adding a voicing functionality, enabling sight-impaired users to have the content 
                      of the website easily read out loud. <br /> <br />
                      
                      As an addition to the website, Slagelse Musikhus asked us to create a new logo design, as well as a promotional video for social media. 

                  </p>
                </span>
                <img className="mockUpImages" src="../../build/images/deskmusikhus.png" alt="Responsive Emptor" />
                <span className="headerAndBody">
                  <h2> Technologies </h2>
                  <p> For the work at Slagelse Musikhus, the obvious HTML, CSS and Javascript was used for markup, style and effectivity. 
                      For the CRUD system PHP was used.
                  </p>
                </span>
                <span className="icon-wrapper-mobile">
                    <img src="../../build/images/HTML.png" alt="HTML icon" className="icon" />
                    <img src="../../build/images/css.png" alt="CSS icon" className="icon" />
                    <img src="../../build/images/js.png" alt="Javascript icon" className="icon" />
                    <img src="../../build/images/php.png" alt="Php icon" className="icon" />
                  </span>
                  <span className="icon-wrapper">
                    <div></div>
                    <span>
                      <img src="../../build/images/HTML.png" alt="HTML icon" className="icon" />
                      <img src="../../build/images/css.png" alt="CSS icon" className="icon" />
                      <img src="../../build/images/js.png" alt="Javascript icon" className="icon" />
                      <img src="../../build/images/php.png" alt="Php icon" className="icon" />
                    </span>
                  </span>
                  <button id="slagelseMusikhusButton"> NEXT PROJECT </button>
              </div>
            </div>

            <div className="content" data-content="content-3">
              <div className="showcase-nav"></div>
              <div className="content-wrapper">
                <h1> Cakes by Connie </h1>
                <h2 id="construction"> Page under construction </h2>
              </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MyWork;

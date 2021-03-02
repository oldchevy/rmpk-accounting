import React from 'react';
import './App.css';

class App extends React.Component {

  timer;

  offset = 0;

  ids = [
    "About",
    "Consultation",
    "Book",
    "Presentation"
  ]

  itemElementRefs;

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.spy(), 100);
  }

  componentWillUnmount() {
      window.clearInterval(this.timer);
  }

  isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 - this.offset; //and any prev not in view
  }

  rectTopBottom(element) {
    const rect = element.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom};
  }

  spy() {
    if (!this.itemElementRefs) {
      this.itemElementRefs = this.ids.map(id => document.getElementById(id));
    }

    let previousElInView = false;
    const items = this.ids
      .map(id => {
        const element = document.getElementById(id);
        if (element) {

          const item = {
            elInView: this.isInView(element),
            element,
            rectTop: this.rectTopBottom(element).top,
            rectBottom: this.rectTopBottom(element).bottom,
          };

          item.inView = previousElInView ? false : item.elInView;

          if (!previousElInView) {
            previousElInView = item.elInView;
          }
          return item;
        } else {
          return;
        }
      });
    this.setState({ items: items});
    
  }

  render() {
    return (  
      <React.Fragment> 
   
      <header className="footer-header sticky-top py-1">
        <nav id="navbar" className="container d-flex flex-row justify-content-between bottom-buffer">
          <a className="py-2 navbar-brand" href="#" aria-label="Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
            </svg>
          </a>
          <h3 className="nav nav-pills py-2 hide-nonmobile">Daily Fantasy Sports CPA</h3>
          <ul className="nav nav-pills hide-mobile">
            {this.state.items.map((item, i) => {
              return (
                <li className="nav-item">
                  <a 
                    className={item.inView ? "nav-link active" : "nav-link"} 
                    href={"#"+this.ids[i]}>{this.ids[i]}
                  </a>
                </li>
              );
            })}
            <li className="nav-item spaced">
              <a
                  className="py-2 d-none d-md-inline-block"
                  href="https://twitter.com/dailyfantasycpa?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-twitter" viewBox="0 0 24 24">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
            </li>
          </ul>
  
        </nav>
      </header>
  
      <main>
        <div className="court">
          <div className="over-court position-relative p-3 p-md-5">
            <div className="col-sm-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 fw-normal hide-mobile">Daily Fantasy Sports CPA</h1>
              <p className="lead fw-normal">Welcome to my website. I specialize in advising YOU about daily fantasy sports tax implications. Read on to find out about what I offer!</p>
            </div>
          </div>
        </div>
        
        <div id="About" className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="mo-margin card splash-height bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white">
            <div className="my-3 py-3">
              <h2 className="display-5">About me</h2>
              <p className="lead">Here I tell you some things about myself.</p>
            </div>
            <div className="bg-light about-me shadow-sm mx-auto card-bkgd"></div>
          </div>
          <div className="mo-margin card splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
            <div className="my-3 p-3">
              <p className="lead">
                Hi, I'm Peter.
              </p>
              <p className="">
                Do you ever get so used to winning that it becomes a chore?
                "Ugh, what am I going to do with ANOTHER lambo in the garage."
                Well I'll tell you what you're going to do, Tai Lopez. You're going to
                want to let a professional handle the details of the taxable implications
                of all that #winning. With these details sorted, you can get back to making
                big baller moves. Here are a few of the services and resources that I offer
                to all my clients:
              </p>
              <p>
                <ul>
                  <li>Tax preparation consulting services. A little more detail.</li>
                  <li>My e-Book "How I Made Six Figures Playing Daily Fantasy Basketball" will show you how to optimize your lineups AND your dollars owed to Uncle Sam.</li>
                  <li>My presentation "Tax Planning Around Your Daily Fantasy Sports Winnings"</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
  
        <div id="Consultation" className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="mo-margin card splash-height bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden hide-noskinny">
            <div className="my-3 py-3">
              <h2 className="display-5">Consultation Services</h2>
              <p className="lead">Services I offer.</p>
            </div>
            <div className="taxes bg-light shadow-sm mx-auto card-bkgd"></div>
          </div>
          <div className="mo-margin card splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
            <div className="my-3 p-3">
              <p className="">
                I can advise you on any number of topics such as:
              </p>
              <p>
                <ul>
                  <li>Llamas.</li>
                  <li>Alpacas.</li>
                  <li>Camels</li>
                </ul>
              </p>
              <p className="lead">
                Book a Consultation
              </p>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">What are you interested in</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
              </div>
            </div>
          </div>
          <div className="mo-margin card splash-height bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden hide-skinny">
            <div className="my-3 py-3">
              <h2 className="display-5">Consultation Services</h2>
              <p className="lead">Services I offer.</p>
            </div>
            <div className="taxes bg-light shadow-sm mx-auto card-bkgd"></div>
          </div>
        </div>
  
        <div id="Book" className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="book mo-margin card splash-height me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center">
          </div>
          <div className="mo-margin card splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5">
            <div className="my-3 p-3">
              <p className="lead">
                Book
              </p>
              <p>
                In my book I cover topics such as 
              </p>
              <p>
                <ul>
                  <li>Llamas.</li>
                  <li>Alpacas.</li>
                  <li>Camels</li>
                </ul>
              </p>
              <p className="lead">
                Get Notified When My Book is Released
              </p>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
              </div>
              <div className="mb-3">
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
              </div>
            </div>
          </div>
        </div>
  
        <div id="Presentation" className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="preso mo-margin card splash-height me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center hide-noskinny">
          </div>
          <div className="mo-margin card splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
            <div className="my-3 p-3">
              <p className="lead">
                Presentation
              </p>
              <p>
                In my presentation I cover topics such as 
              </p>
              <p>
                <ul>
                  <li>Llamas.</li>
                  <li>Alpacas.</li>
                  <li>Camels</li>
                </ul>
              </p>
              <p>
                The presentation can be found at {" "}
                <a
                  href="https://gumroad.com/l/TiiOe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gumroad.com/l/TiiOe
                </a>
              </p>
            </div>
          </div>
          <div className="preso mo-margin card splash-height me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center hide-skinny">
          </div>
        </div>
          
        
      </main>
  
      <footer className="footer-header">
        <div className="container py-3">
          <div className="row">
            <div className="col">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trophy hide-mobile" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
              </svg>
              <small className="d-block mo-margin text-muted">© Peter Kwon CPA, 2020</small>
            </div>
            <div className="col right-side">
              <a
                className="hide-mobile"
                href="https://twitter.com/dailyfantasycpa?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-twitter" viewBox="0 0 24 24">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                @DailyFantasyCPA
              </a>
              <a
                className="hide-nonmobile"
                href="https://twitter.com/dailyfantasycpa?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-twitter" viewBox="0 0 24 24">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
  
      </React.Fragment>
    );
  }
}

export default App;

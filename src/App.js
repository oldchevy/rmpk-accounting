import React from 'react';
import './App.css';

class App extends React.Component {

  timer;

  offset = 0;

  ids = [
    "About",
    "Services",
    "Consultation"
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
          <h3 className="nav nav-pills py-2 hide-nonmobile">RMPK Accounting</h3>
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
          </ul>
  
        </nav>
      </header>
  
      <main>
        <div className="court">
          <div className="over-court position-relative p-3 p-md-5">
            <div className="col-sm-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 fw-normal hide-mobile">RMPK Accounting</h1>
              <p className="lead fw-normal">
                RMPK Accounting specializes in serving high-net-worth 
                clients and small business owners with bookkeeping, tax planning and tax consulting, 
                primarily focusing on cryptocurrency and nonfungible token (NFTs) clients. We are here to provide 
                valuable resources, sound advice and strategies to help you pay the least amount of tax legally 
                within the confines of the law.
              </p>
            </div>
          </div>
        </div>
        
        <div id="About" className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="mo-margin card splash-height bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white">
            <div className="my-3 py-3">
              <h2 className="display-5">Peter Kwon</h2>
              <p className="lead">CPA</p>
            </div>
            <div className="bg-light about-me pk shadow-sm mx-auto card-bkgd"></div>
          </div>
          <div className="mo-margin card splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
            <div className="my-3 p-3">
              <p className="lead">
                Hi, I'm Peter.
              </p>
              <p className="">
                Peter graduated from Virginia Tech in May of 2014 with bachelor’s degrees in Accounting and Finance. 
                He has 8 years of tax experience at a national public accounting firm in which he has helped to consult 
                and prepare tax returns for hundreds of clients. In his spare time, Peter enjoys playing golf, investing 
                in long-term index funds and cryptocurrency, and making Daily Fantasy Sports lineups.
              </p>
            </div>
          </div>
        </div>

        <div className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="mo-margin card splash-height bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white hide-noskinny">
            <div className="my-3 py-3">
              <h2 className="display-5">Richard Muterspaugh</h2>
              <p className="lead">CPA</p>
            </div>
            <div className="bg-light about-me rm shadow-sm mx-auto card-bkgd"></div>
          </div>
          <div className="mo-margin card splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
            <div className="my-3 p-3">
              <p className="lead">
                Hi, I'm Richard.
              </p>
              <p className="">
                Richard is a 2008 graduate of Roanoke College and holds a degree in Business Administration 
                with a concentration in Accounting. He obtained his CPA license in 2014 and has spent his entire 
                career (15+ years) in public accounting. His primary focus has been in bookkeeping, payroll, 
                tax planning and preparation for small businesses and individuals. Richard lives in Salem, VA, 
                with his wife and two children. In his free time, he loves to golf, spend time with his 
                family, read, and travel whenever he gets the chance.
              </p>
            </div>
          </div>
          <div className="mo-margin card splash-height bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white hide-skinny">
            <div className="my-3 py-3">
              <h2 className="display-5">Richard Muterspaugh</h2>
              <p className="lead">CPA</p>
            </div>
            <div className="bg-light about-me rm shadow-sm mx-auto card-bkgd"></div>
          </div>
        </div>

        <div id="Services" className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="mo-margin card splash-height bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Services Offered</h2>
              {/* <p className="lead">Services I offer.</p> */}
            </div>
            <div className="taxes bg-light shadow-sm mx-auto card-bkgd"></div>
          </div>
          <div className="mo-margin card splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5">
            <div className="my-3 p-3">
              <p className="lead">
                What we do
              </p>
              <p>
                We help clients reduce their tax liability while minimizing their tax exposure by ensuring 
                that they are taking advantage of all available tax incentives and methods in compliance 
                with the IRS code and regulation.
              </p>
              <p>
                <ul>
                  <li>Bookkeeping</li>
                  <li>Tax Preparation (All we need is your public wallet addresses to get started)</li>
                  <li>Tax Consulting</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      
  
        <div id="Consultation" className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="mo-margin card splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
            <h2 className="display-7">Book a consultation today!</h2>
            {/* TODO: make sure this doesn't become a scrollable div on mobile devices */}
            <div class="calendly-inline-widget" data-url="https://calendly.com/d/cf3-n8f-7jx/nft-tax-consult" style={{minWidth:'320px', height: '650px'}}></div>
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
              <small className="d-block mo-margin text-muted">© RMPK Accounting, 2022</small>
            </div>
            <div className="col right-side">
              {/* <a
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
              </a> */}
            </div>
          </div>
        </div>
      </footer>
  
      </React.Fragment>
    );
  }
}

export default App;

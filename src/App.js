import React from 'react';
import './App.css';
import {ReactComponent as WhiteMainLogo} from './static_assets/RMPK-Logo/RMPK-White-Main.svg';

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
          return null;
        }
      });
    this.setState({ items: items});
    
  }

  render() {
    return (  
      <React.Fragment> 
   
      <header className="footer-header sticky-top py-1">
        <nav id="navbar" className="container d-flex flex-row justify-content-between bottom-buffer">
          <a className="py-2 navbar-brand logo-medium" href="#" aria-label="Home">
            <WhiteMainLogo />
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
            <div className="col fit-logo">
              <WhiteMainLogo className="logo-footer"/>
            </div>
            <div className="col right-side">
              <small className="d-block mo-margin text-muted">© RMPK Accounting, 2022</small>
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

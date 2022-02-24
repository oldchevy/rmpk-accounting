import React from 'react';
import './App.css';
import {ReactComponent as WhiteMainLogo} from './static_assets/RMPK-Logo/RMPK-White-Main.svg';
import {ReactComponent as TwitterLogo} from './static_assets/twitter.svg';
import {ReactComponent as EmailLogo} from './static_assets/email-logo.svg';
import {ReactComponent as LinkedInLogo} from './static_assets/linkedin.svg';

class App extends React.Component {

  timer;

  // The offset accounts for the fact that when an el's top scrolls out 
  // of view at that point it is well above the fixed header.
  offset = 170;

  // lastTop stores the previous scroll position so the spy can 
  // short-ciruit.
  lastTop = null;

  ids = [
    "About",
    "Services",
    "Consultation"
  ];

  itemElementRefs;

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      indexOfInViewSection: -1,
    };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.spy(), 100);
  }

  componentWillUnmount() {
      window.clearInterval(this.timer);
  }

  isInFullView(elRect) {
    return elRect.top <= 0 + this.offset;
  }

  rectTopBottom(elRect) {
    return { top: elRect.top, bottom: elRect.bottom};
  }

  spy() {
    // Only query the dom once.
    if (!this.itemElementRefs) {
      this.itemElementRefs = this.ids.map(id => document.getElementById(id));
    }

    // Short circuit
    if (window.scrollY === this.lastTop) {
      return;
    }
    this.lastTop = window.scrollY;

    let previousItem = null;
    const items = this.itemElementRefs.map((elRef, i) => {
        if (elRef) {
          const elRect = elRef.getBoundingClientRect();
          const item = {
            elAboveViewportTop: this.isInFullView(elRect),
            inView: false,
            elRef,
            rectTop: this.rectTopBottom(elRect).top,
            rectBottom: this.rectTopBottom(elRect).bottom,
          };

          if (item.elAboveViewportTop) {
            if (previousItem) {
              previousItem.inView = false;
            }
            item.inView = true;
          }
          previousItem = item;
          return item;
        } else {
          return null;
        }
      });
    this.setState({ items: items, indexOfInViewSection: this.indexOfInViewSection() });
    let indexOfVisibileSection = this.indexOfInViewSection();
    if (indexOfVisibileSection < 0) {
      const currentHash = window.location.hash;
      const nextHash = '';
      if (currentHash != nextHash) {
        window.history.replaceState(null, '', '#');
      }
    } else {
      const currentHash = window.location.hash;
      const nextHash = `#${this.ids[indexOfVisibileSection]}`;
      if (currentHash != nextHash) {
        window.history.replaceState(null, '', `#${this.ids[indexOfVisibileSection]}`);
      }
    }
  }

  indexOfInViewSection() {
    return this.state.items.map(item => item.inView).indexOf(true);
  }

  render() {
    return (  
      <React.Fragment> 
      <header 
        className={this.indexOfInViewSection() > -1 ? "footer-header fixed-top py-1 shown-below-top" : "footer-header fixed-top py-1 clear-at-top"} >
        <nav id="navbar" className="header-footer-container d-flex flex-row justify-content-between bottom-buffer">
          <a
            className={this.indexOfInViewSection() > -1 ? "py-2 navbar-brand logo-medium show-below-top" : "py-2 navbar-brand logo-medium hide-at-top"} 
            href="#" aria-label="Home">
            <WhiteMainLogo />
          </a>
          <div className="filler"></div>
          <ul className="nav nav-pills hide-mobile">
            {this.state.items.map((item, i) => {
              return (
                <li className="nav-item">
                  <a 
                    className={item.inView ? "nav-link active" : "nav-link"} 
                    href={"#"+this.ids[i]}><strong>{this.ids[i]}</strong>
                  </a>
                </li>
              );
            })}
          </ul>
  
        </nav>
      </header>
  
      <main>
        <div className="chain">
          {/* this div fills the space of the header and sits behind it */}
          <div className="over-chain position-relative p-3 p-md-5">
            <div className="col-sm-5 p-lg-5 mx-auto splash-title">
              <WhiteMainLogo className="logo-xl"/>
              <p className="fw-normal">
                RMPK Accounting specializes in serving high-net-worth 
                clients and small business owners with bookkeeping, tax planning, and tax consulting, 
                primarily focusing on cryptocurrency and nonfungible token (NFTs) clients. We are here to provide 
                valuable resources, sound advice and strategies to help you pay the least amount of tax legally 
                within the confines of the law.
              </p>
            </div>
          </div>
        </div>
        <div className="main-section">
          <div id="About" className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div className="mo-margin card custom-radius splash-height bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white">
              <div className="my-3 py-3">
                <h2 className="display-5">Richard Muterspaugh</h2>
                <p className="lead">CPA</p>
              </div>
              <div className="bg-light about-me rm shadow-sm mx-auto card-bkgd"></div>
            </div>
            <div className="mo-margin card custom-radius splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
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
                <p className="lead second-p">
                  Get In Touch
                </p>
                <p className="logo-spacing">
                  <a className="socials-links" href="mailto:rmutercpa@gmail.com" aria-label="Home">
                    <EmailLogo className="social-icons" /> rmutercpa@gmail.com
                  </a>
                </p>
                <p className="logo-spacing">
                  <a className="socials-links" href="https://www.linkedin.com/in/richard-muterspaugh-8a383a206/" aria-label="Home">
                    <LinkedInLogo className="social-icons" /> Richard Muterspaugh
                  </a>
                </p>
                <p className="logo-spacing">
                  <a className="socials-links" href="https://twitter.com/RichM_34" aria-label="Home">
                    <TwitterLogo className="social-icons" /> RichM_34
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div className="mo-margin card custom-radius splash-height bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white hide-noskinny">
              <div className="my-3 py-3">
                <h2 className="display-5">Peter Kwon</h2>
                <p className="lead">CPA</p>
              </div>
              <div className="bg-light about-me pk shadow-sm mx-auto card-bkgd"></div>
            </div>
            <div className="mo-margin card custom-radius splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
              <div className="my-3 p-3">
                <p className="lead">
                  Hi, I'm Peter.
                </p>
                <p className="">
                  Peter graduated from Virginia Tech in May of 2014 with bachelor’s degrees in Accounting and Finance. 
                  He has 8 years of tax experience at a national public accounting firm in which he has helped to consult 
                  and prepare tax returns for hundreds of clients. In his spare time, Peter enjoys playing golf, investing 
                  in long-term index funds and cryptocurrency, and making Daily Fantasy Sports lineups. Peter got into NFTs 
                  first through NBA TopShot and then later purchased his first NFT- a Bored Ape on OpenSea. He is still holding 
                  onto one ape, one kennel dog, and a few mutants. His favorite NFT in his collection is his super yeti.
                </p>
                <p className="lead second-p">
                  Get In Touch
                </p>
                <p className="logo-spacing">
                  <a className="socials-links" href="mailto:peterkwoncpa@gmail.com" aria-label="Home">
                    <EmailLogo className="social-icons" /> peterkwoncpa@gmail.com
                  </a>
                </p>
                <p className="logo-spacing">
                  <a className="socials-links" href="https://www.linkedin.com/in/peter-kwon-cpa-67605161/" aria-label="Home">
                    <LinkedInLogo className="social-icons" /> Peter Kwon, CPA
                  </a>
                </p>
                <p className="logo-spacing">
                  <a className="socials-links" href="https://twitter.com/NFTandDFSCPA" aria-label="Home">
                    <TwitterLogo className="social-icons" /> NFTandDFSCPA
                  </a>
                </p>
              </div>
            </div>
            <div className="mo-margin card custom-radius splash-height bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white hide-skinny">
              <div className="my-3 py-3">
                <h2 className="display-5">Peter Kwon</h2>
                <p className="lead">CPA</p>
              </div>
              <div className="bg-light about-me pk shadow-sm mx-auto card-bkgd"></div>
            </div>
          </div>

          <div className="featured-nft-section">
            <a href="https://opensea.io/assets/0x3f0785095a660fee131eebcd5aa243e529c21786/5198"><div className="art-card yeti"></div></a>
            <a href="https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/4963"><div className="art-card ape"></div></a>
            <a href="https://opensea.io/assets/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623/7593"><div className="art-card doge"></div></a>
          </div>

          <div id="Services" className="d-lg-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div className="mo-margin card custom-radius splash-height bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
              <div className="my-3 py-3">
                <h2 className="display-5">Services Offered</h2>
                {/* <p className="lead">Services I offer.</p> */}
              </div>
              <div className="taxes bg-light shadow-sm mx-auto card-bkgd"></div>
            </div>
            <div className="mo-margin card custom-radius splash-height bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5">
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
            <div className="mo-margin calendly-parent card custom-radius bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5">
              <h2 className="display-7">Book a consultation today!</h2>
              {/* TODO: make sure this doesn't become a scrollable div on mobile devices */}
              <div class="calendly-inline-widget" data-url="https://calendly.com/d/cf3-n8f-7jx/nft-tax-consult" style={{minWidth:'320px', height: '700px', overflow: 'hidden'}}></div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="header-footer-container py-3">
          <div className="row">
            <div className="col fit-logo">
              <WhiteMainLogo className="logo-footer"/>
            </div>
            <div className="col right-side">
              <small className="d-block mo-margin text-muted">Copyright © 2022 RMPK ACCOUNTING LLC. All rights reserved. RMPK ACCOUNTING, LLC is a Virginia limited liability company</small>
              {/* <a
                className="hide-mobile"
                href="https://twitter.com/dailyfantasycpa?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-twitter" viewBox="0 0 24 24">
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

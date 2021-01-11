import logo from './static_assets/book_cover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          E-book coming soon! Stay tuned for more details.
        </p>
        <p>Follow my twitter <code>
          <a
            className="App-link"
            href="https://twitter.com/dailyfantasycpa?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
          @dailyfantasycpa
        </a></code> to stay up to date.</p>
      </header>
    </div>
  );
}

export default App;

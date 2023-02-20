import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer.js';
import Header from './component/Header.js';
import Content from './component/Content.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

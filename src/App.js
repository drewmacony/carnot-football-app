
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import Leagues from './components/Leagues';
import Standing from './components/Standings';
import Topbar from './components/topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Banner from './components/Banner.jsx';
import Main from './components/Main.jsx';
import Aside from './components/Aside.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Banner />
      <Main />
      <Aside />
      <Footer />
    </div> 
  );
}

export default App;
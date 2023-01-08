import './App.css';
import Banner from './src/components/Banner.jsx';
import Main from './src/components/Main.jsx';
import Aside from './src/components/Aside.jsx';
import Footer from './src/components/Footer.jsx';

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
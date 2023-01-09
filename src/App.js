import Banner from './components/Banner';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

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
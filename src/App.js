import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Data from './Data/Data';

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
    <Navbar />
    <Content data ={Data} />
    <Footer />
    </div>
  );
}

export default App;

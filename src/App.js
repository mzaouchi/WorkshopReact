import './App.css';
import { Home, Product } from './Components/Home';
// import Aziz from './Components/Home';
import bobo from './2.png'

function App() {
  return (
    <>
    <h1 className='mohamed'>Workshop React</h1>
    <Home/>
    <Product/>
    <img src='/1.jpg' alt='Not FOund'/>
    <img src={bobo} alt='Not Found'/>
    {/* <Aziz/> */}
    
    <h2 style={{color:"green",textDecoration : 'underline'}}>Future of work.</h2>
   
    </>
    
  )
}

export default App;

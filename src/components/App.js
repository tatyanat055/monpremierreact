import Logo from '../logo.svg'; 
import logo2 from '../assets/logo.png';
import '../styles/App.css'
import Banner from './banner';
import Cart from './cart';
import Shoppinglist from './Shoppinglist';

function App() {
  return (

      <div>
        <Banner>
            <img src={logo2} alt="logo de la maison jungle" className='logo-lmj'></img>
            <h1 className='title-lmj'>La maison jungle</h1>
        </Banner>
        <Cart/>
        <Shoppinglist/>
      </div>
  )
};
//J'exporte le composant

export default App;

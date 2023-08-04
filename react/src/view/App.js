import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import RouterComponent from './RouterComponent/RouterComponent'
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function handleAddToCart(product){
    const thisProduct = cart.find((item) => item.id === parseInt(product.id));
    if(thisProduct){
      setCart(cart.map((item) => item.id === product.id ? 
                        {...thisProduct, quantity: thisProduct.quantity + 1} : item))
    }else{
      setCart([...cart, {...product, quantity: 1}])
    }
  }

  function handleRemoveFromCart(product){
    const thisProduct = cart.find((item) => item.id === parseInt(product.id));
    if (thisProduct.quantity <= 1) {
      setCart(cart.filter((item) => item.id !== parseInt(product.id)))
    } 
    else {
      setCart(
        cart.map((item) => item.id === product.id ? 
                {...thisProduct, quantity: thisProduct.quantity - 1 } : item)
      )
    }
  }
  function handleClearCart() {
    setCart([])
    localStorage.removeItem('cart')
  }

  return (
    <div className="App">
      <BrowserRouter>
        <RouterComponent handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart} cart={cart} handleClearCart={handleClearCart}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

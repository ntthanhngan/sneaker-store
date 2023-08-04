import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './Cart.scss'
import emptyCart from '../../style/emptyCart.png'

Cart.propTypes = {
  cart: PropTypes.array,
};

Cart.defaultProps = {
  cart: [],
};

function Cart(props) {
  const {cart} = props
  const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)

  
  return (
    <div className='container-fluid'>
      { cart.length > 0 ?
        <>
        <h2>Shopping Cart</h2>
        <div className='cart-ct'>
          <div className='tbl-container col-lg-8 col-md-8 col-sm-12 col-xs-12'>
          
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quant.</th>
                </tr>
              </thead>
              <tbody>
                    {cart.map((item, index)=>(
                      <tr className='cart-item' key={index}>
                          <td>{index+1}</td>
                          <td>
                              <img src={item.image}  alt="Product" style={{width:'128px'}}/>
                          </td>
                          <td>
                            <Link to={`/product-details/`}>{item.name}</Link>
                          </td>
                          <td>{item.price.toLocaleString()} VND</td>
                          <td>
                            <button onClick={()=>{props.handleRemoveFromCart(item)}} > 
                              <FontAwesomeIcon icon={faChevronLeft} color='white' size='sm'/>
                            </button>
                            <input value={item.quantity} readOnly/>
                            {/* <span>{item.quantity}</span> */}
                            <button onClick={()=>{props.handleAddToCart(item)}}> 
                              <FontAwesomeIcon icon={faChevronRight} color='white' size='sm'/>
                            </button>
                          </td>
                          {/* <td >
                            <button onClick={()=>{props.handleRemoveFromCart(item)}} id='btn-remove-item'>
                              <FontAwesomeIcon icon={faXmark}/>
                            </button>
                          </td> */}
                      </tr>
                      ))}
              </tbody>
            </table>
          </div >
          <div className='summary col-lg-4 col-md-4 col-sm-12 col-xs-12' >
            <h3>Summary</h3>
            <div>
              <p>Subtotal</p>
              <p>{totalPrice.toLocaleString()} VND</p>
            </div>
            <div>
              <p>Shipping cost</p>
              <p>Free</p>
            </div>
            <div className='total'>
              <p>Total</p>
              <p>{totalPrice.toLocaleString()} VND</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
        </>
        :
        <div className='ct-empty-cart'>
          <img src={emptyCart} alt='empty cart'/>
          <p>No item in cart.</p> 
          <Link to='/'>Back to Store</Link>
        </div>
      }
    </div>
  );
}

export default Cart;
import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './ProductDetails.scss'


ProductDetails.propTypes = {
    datas: PropTypes.array,
};
  
ProductDetails.defaultProps = {
    datas: [],
};
  
function ProductDetails(props) {
    const { datas } = props;

    const {id} = useParams()
    const thisProduct = datas.find(item => item.id === parseInt(id))

    return (
        <>
            {
                thisProduct?
                    <div className='container'>
                        <div className="ct-product-details">
                            <img src={thisProduct.image} alt="" />
                            <div className="ct-details">
                                <h1>{thisProduct.name}</h1>
                                <p>{thisProduct.price.toLocaleString()} VND</p>
                                <div className="ct-size">
                                    <p>Select Size</p>
                                    <div className="size-options">
                                        <button className="btn-size">EU 36</button>
                                        <button className="btn-size">EU 36.5</button>
                                        <button className="btn-size">EU 37</button>
                                        <button className="btn-size">EU 37.5</button>
                                        <button className="btn-size">EU 38</button>
                                        <button className="btn-size">EU 38.5</button>
                                        <button className="btn-size">EU 39</button>
                                        <button className="btn-size">EU 39.5</button>
                                        <button className="btn-size">EU 40</button>
                                        <button className="btn-size">EU 41</button>
                                    </div>
                                </div>
                                <button 
                                    type='submit' 
                                    className='add-to-cart' 
                                    onClick={()=>props.handleAddToCart(thisProduct)}
                                >
                                    Add to cart
                                </button>
                                <button type='submit'>
                                    <span>Favourite</span>  
                                    <FontAwesomeIcon icon={faHeart} size='sm'/>
                                </button>
                                <p>{thisProduct.description}</p>
                            </div>
                        </div>
                    </div>
                :
                    <div>
                        <span>Loading</span>
                    </div>
            }
        </>
    )
}

export default ProductDetails;
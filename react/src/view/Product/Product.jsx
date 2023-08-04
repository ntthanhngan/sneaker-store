
import Pagination from '../Pagination/Pagination';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Product.scss'
import Filter from '../Filters/Filter';

Product.propTypes = {
  datas: PropTypes.array,
  gender: PropTypes.number,
};

Product.defaultProps = {
  datas: [],
  gender: 0
};

function Product(props) {
  const { datas, gender } = props;

  return (
    <div className="container-fluid">
      <div className="ct-header">
        {
          gender === 0 ? <h1>Women's Shoes</h1> : <h1>Men's Shoes</h1>
          
        }
        <Filter/>
      </div>
      <div className="card-list">
      {datas.map(item=>(
        <div className="product-card" key={item.id}>
          <Link to={`/product-details/${item.id}`}>
            <img  src={item.image}
                  alt="Product"/>
            <div>
              <h5>{item.name}</h5>
              <p>{item.price.toLocaleString()} VND</p>
             </div> 
            </Link>  
            <div className="bt-card">
              <button onClick={()=>props.handleAddToCart(item)}>Add to cart</button>
              <button>Favourite</button>
            </div>
        </div>
      ))}
      </div>
      <Pagination
        pagination={props.pagination}
        onPageChange={props.handlePageChange}
      />
    </div>
  );
}

export default Product;
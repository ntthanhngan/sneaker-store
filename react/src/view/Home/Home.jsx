import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

function Home(props) {
    
    /* function handleLogout(){
        axios.get('http://localhost:3001/users/logout')
        .then(res=>{
            window.location.reload(true)
            props.handleClearCart()
        })
        .catch(err=>{
            console.log(err)
        })
    } */
    return (
        <div className="hero">
            <div className="banner">
                <Link to='products/men'>Shop now</Link>
            </div>
            <div className="slide-1">
                <div className="slide-item">Authentication Shoes</div>
                <div className="slide-item">Variety brands</div>
                <div className="slide-item">Interesting promo & deals</div>
                <div className="slide-item">30 DAYS MONEY-BACK GUARANTEE</div>
            </div>
            {/* <div className="slide-2">
                <h4>New products</h4>
                <div className="slide-products">
                    <div className="item">
                        <h5></h5>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Home;
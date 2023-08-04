
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons'
import Search from '../Search/Search';
import './Topbar.scss'

function Common({ onSubmit, auth, handleGenderSelection }) {
    return (
        <div className='container-fluid p-0'>
            {/* Topbar */}
            <nav className="navb nb-topbar">
                <NavLink to='/'><img src="../logo.svg" alt="Logo"/></NavLink>
                <ul>
                    <NavLink to='/'>Home</NavLink>
                    <div className="menu">
                        <NavLink to='/products/men' onClick={()=>handleGenderSelection(1)}>Men</NavLink>
                        {/* <ul className="sub-menu">
                            <li><Link>All Shoes</Link></li>
                            <li><Link>Clothing</Link></li>
                            <li><Link>Accessories</Link></li>
                        </ul> */}
                    </div>
                    <div className="menu">
                        <NavLink to='/products/women' onClick={()=>handleGenderSelection(0)}>Women</NavLink>
                    </div>
                    <NavLink to='/products/:cat'>Accessories</NavLink>
                </ul>
                <ul className='nb-topbar-icon'>
                    <Search onSubmit={onSubmit}/>
                    {
                        auth?
                        <div>
                            <NavLink to='/setting' className='account'>
                                    <FontAwesomeIcon icon={faCircleUser} size='lg'/>
                            </NavLink>
                            <NavLink to='/cart'>
                                <FontAwesomeIcon icon={faBagShopping} size='lg'/>
                            </NavLink>
                            <NavLink to='/wishlist'>
                                <FontAwesomeIcon icon={faHeart} size='lg'/>
                            </NavLink>
                        </div>
                        :
                        <div>
                            <NavLink to='/login'>
                                <FontAwesomeIcon icon={faCircleUser} size='lg'/>
                            </NavLink>
                            <NavLink to='/cart'>
                                <FontAwesomeIcon icon={faBagShopping} size='lg'/>
                            </NavLink>
                            <NavLink to='/wishlist'>
                                <FontAwesomeIcon icon={faHeart} size='lg'/>
                            </NavLink>
                        </div>
                    }
                </ul>
            </nav>
             {/* End Topbar */}

            <Outlet/>

            {/* Footer */}
            <div className="ct-footer">
                <div className="item about-us">
                    <h5>About us</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <div>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faTiktok}/>
                    </div>
                </div>
                <div className="item">
                    <h5>Contact us</h5>
                    <ul>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faPhone} size='sm'/>
                            </span> 
                            0812 345 123
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} size='sm'/>
                            </span> 
                            sneakerstore@gmail.com
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faLocationDot} size='sm'/>
                            </span> 
                            333, 12 District, HCM City
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <h5>Our services</h5>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/products/men'>Men</Link>
                        </li>
                        <li>
                            <Link to='/products/women'>Women</Link>
                        </li>
                        <li>
                            <Link to='/products/:cat'>Accessories</Link>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <h5>Term & policy</h5>
                    <ul>
                        <li>
                            <Link to='/'>Term & policy</Link>
                        </li>
                        <li>
                            <Link to='/'>FaQ</Link>
                        </li>
                        <li>
                            <Link to='/'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End Footer */}
        </div>
    );
}

export default Common;
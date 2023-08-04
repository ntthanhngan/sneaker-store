
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons'
import Search from '../Search/Search';
import './ShareUI.scss'

function ShareUI({ onSubmit, auth, handleGenderSelection }) {
    return (
        <div className='header'>
            <div className="topbar">
                <div className="container-fluid p-0">
                    <div className="row justify-content-between">
                        <div className="col-auto">
                            <ul className="topbar__social-list">
                                <li><Link>
                                        <FontAwesomeIcon icon={faFacebook} color=''/>
                                    </Link></li>
                                <li><Link>
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </Link></li>
                                <li><Link>
                                        <FontAwesomeIcon icon={faTiktok}/>
                                    </Link></li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <ul className="topbar__links">
                                <li>
                                    <Link>Help</Link>
                                </li>
                                <li>
                                    <span>|</span>
                                </li>
                                <li>
                                    <Link>Sign up</Link>
                                </li>
                                <li><span>|</span></li>
                                <li>
                                    <Link>Sign in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                

                {/* <Outlet/> */}
            </div>
            <nav className='nav-bar'>
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-auto p-0">
                            <div className="navbar__logo">
                                <Link to='/'><img src="" alt="Logo" /></Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <ul className='navbar__menu'>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/products/men' onClick={()=>handleGenderSelection(1)}>Men</NavLink></li>
                                <li><NavLink to='/products/women' onClick={()=>handleGenderSelection(0)}>Women</NavLink></li>
                                <li><NavLink to='/products/:cat'>Accessories</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-auto p-0">
                            <ul className="navbar__search">
                                <li><Search onSubmit={onSubmit}/></li>
                                <li>
                                    <NavLink to='/cart'>
                                        <FontAwesomeIcon icon={faBagShopping} size='lg'/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/wishlist'>
                                        <FontAwesomeIcon icon={faHeart} size='lg'/>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default ShareUI;
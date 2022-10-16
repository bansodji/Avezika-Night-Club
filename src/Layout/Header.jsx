import React from 'react';
import Hero from '../Components/Hero';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav id="navbar" className="navbar navbar-expand-lg glassy-bg-000 nav-shadow position-fixed" style={{ zIndex: "1000000", width: '100%' }}>
                <div className="container-fluid">
                    <a id='mob-navBrand' href="" className="navbar-brand mb-2">
                        <div className="d-flex flex-column mx-auto fff">
                            <div id="brand-icon" className="m-auto text-center border-white fs-5"
                                style={{ padding: '5px 15px' }}>A</div>
                            <span id="brand-name" className="fs-4 space-4 lh-sm">Avezika</span>
                            <span id="brand-subname" className="lh-1 space-4 font-11 m-auto">Night Club</span>
                        </div>
                    </a>
                    <a style={{ border: 'none', outline: 'none' }} class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars fff"></i>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link hover-fff fff-50" exact to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link hover-fff fff-50" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link hover-fff fff-50" to="/event">Events</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link hover-fff fff-50" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link hover-fff fff-50" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <a href='' id="navBrand" className='mx-auto'>
                            <div className="d-flex flex-column fff">
                                <div id="brand-icon" className="m-auto text-center border-white fs-5"
                                    style={{ padding: '5px 15px' }}>A</div>
                                <span id="brand-name" className="fs-4 space-4 lh-sm">Avezika</span>
                                <span id="brand-subname" className="lh-1 space-4 font-11 m-auto">Night Club</span>
                            </div>
                        </a>
                        <div id='navSocioIcon' className='d-flex me-auto'>
                            <i class="fab fa-facebook-f mx-3 fff-50 hover-fff"></i>
                            <i class="fab fa-instagram mx-3 fff-50 hover-fff"></i>
                            <i class="fab fa-twitter mx-3 fff-50 hover-fff"></i>
                            <i class="fab fa-pinterest-p mx-3 fff-50 hover-fff"></i>
                        </div>
                    </div>
                </div>
            </nav>

            <Hero />
        </header>
    );
}

export default Header;
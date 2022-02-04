import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
    
    let location = useLocation();

    return (
        <div className={`footer ${location.pathname === '/login' && 'footer--home'}`}>
            <div className="container">
                <p className="footer__title">© 2021 RIMAC Seguros y Reaseguros.</p>
            </div>
        </div>
    )
}

export default Footer;
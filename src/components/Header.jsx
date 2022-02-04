import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {

    const [offset, setOffset] = useState(0);
    const [color, setColor] = useState(null);
    let location = useLocation();

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    useEffect(()=>{
        if (location.pathname === '/login') {
            setColor(offset > 20 ? {backgroundColor: '#F7F8FC'} : {backgroundColor: 'transparent'})
        }
        else {
            setColor({backgroundColor: '#FFFFFF'})
        }
    },[offset]);


    return (
        <header className={`header ${location.pathname === '/login' && 'header--home'} `} style={color}>
            <div className="container">
                <div className="header__container">
                    <div className="header__container__icon">
                        <Link to="/">
                            <img src="%PUBLIC_URL%/../images/Logo_RIMAC.svg" alt="" />
                        </Link>
                    </div>
                    <div className="header__container__contact">
                        <div className="header__container__contact__span d-none d-xs-block">
                            <span>¿Tienes alguna duda?</span>
                        </div>
                        <div className="header__container__contact__a">
                            <a href="tel:014116001">
                                <div className='telf'>
                                    <img className='mr-1' src="%PUBLIC_URL%/../images/ic_phone.svg" alt="" />
                                    <p className='d-none d-xs-block'>(01) 411 6001</p>
                                    <p className='d-xs-none ml-1'>Llámanos</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
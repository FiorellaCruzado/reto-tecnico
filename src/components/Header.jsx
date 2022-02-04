import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [offset, setOffset] = useState(0);
    const [color, setColor] = useState(null);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    useEffect(()=>{
        if (offset > 20) {
            setColor({backgroundColor: '#F7F8FC'})
        } else {
            setColor({backgroundColor: 'transparent'})
        }
    },[offset]);
    

   
    
    // window.addEventListener('scroll', this.listenScrollEvent)

    return (
        <header className="header" style={color}>
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
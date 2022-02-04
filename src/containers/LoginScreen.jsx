import React, { useState } from 'react';
import Card from '../components/Card';
import Login from '../components/Login';

const LoginScreen = () => {

    return (
        <div className="login grid">
            <div className="login__item1 grid-12 grid-xs-5">
                <div className="container">
                    <div className="login__item1__content grid">
                        <img className='d-none d-xs-block grid-12' src="%PUBLIC_URL%/../images/login_img.svg" alt="" />
                        <div className='grid grid-12' >
                            <div className='login__item1__card grid-8 grid-xs-12'>
                                <Card
                                    header="¡NUEVO!"
                                    title="Seguro "
                                    titlered="Vehicular Tracking"
                                    description="Cuentanos donde le haras seguimiento a tu seguro"
                                />
                            </div>
                            <div className='login__item1__img d-xs-none grid-4 grid-xs-0'>
                                <img src="%PUBLIC_URL%/../images/login_img_resp.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login__item2 grid-12 grid-xs-7">
                <div className="container">
                    <div className='login__item2__content'>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;
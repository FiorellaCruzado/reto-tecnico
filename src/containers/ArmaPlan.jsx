import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { login } from '../api/user';
import Amount from '../components/Amount';
import Card from '../components/Card';
import CardAuto from '../components/CardAuto';
import Toppings from '../components/Toppings';

const Armatuplan = () => {
    const [user, setUser] = React.useState(null);

    React.useEffect(async () => {
        const result = await login();
        console.log(result);
        setUser(result);
    }, [])

    return (
        <>
            {user &&
                <div className='plan grid'>
                    <aside className="plan__aside grid-12 grid-xs-3">
                        sidebar
                    </aside>
                    <main className="plan__main grid grid-12 grid-xs-9">
                        <div className="plan__content grid-12 grid-xs-8">
                            <div className="container">
                                <div className='d-grid grid-gap-55'>

                                    <div className='d-grid grid-gap-24'>
                                        <div className='back'>
                                            <Link to='/login'>
                                                <span className='back__button'>
                                                    <img src="%PUBLIC_URL%/../images/icon_Back.svg" alt="" />
                                                </span>
                                            </Link>
                                            <div className='back__text'>VOLVER</div>
                                        </div>

                                        <div className='d-grid grid-gap-36'>
                                            <div className=''>
                                                <Card
                                                    gridgap='8px'
                                                    title="¡Hola, "
                                                    titlered="Juan!"
                                                    description="Conoce las coberturas para tu plan"
                                                />
                                            </div>
                                            <div className='plan__cardauto'>
                                                <CardAuto
                                                    placa={user.placa}
                                                    model={user.modelo}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className=''>
                                        PRICE
                                    </div>
                                </div>

                                <div className='toppings'>
                                    <Toppings />
                                </div>
                            </div>
                        </div>

                        <div className="plain_main_price grid-12 grid-xs-4">
                            <Amount />
                        </div>
                    </main>
                    {/* sidebar {
    flex: 1 1 auto
    background-color: gray;
    color: white;
    display:flex;
    flex-direction:column;
    height:100%;
    padding: 0 10px;
    white:450px;

    transition: color .3s ease;
}

&:hover{
    color: darken($color:white, $amount:20)
}*/}
                    {/* <button>
            VOLVER
        </button>
        { user && 
            <>
                Hola {user.nombre} 
            </>
         */}
                </div>
            }
        </>
    )
}

export default Armatuplan;
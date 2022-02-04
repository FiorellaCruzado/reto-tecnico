import React from 'react';
import { login } from '../api/user';
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

                        <div className="plain__main__content grid grid-12 grid-xs-8">

                            <div className='grid grid-12'>
                                <div className=' grid grid-12 grid-gap-24'>



                                    <div className='grid grid-12'>


                                        <button className='grid-1'>
                                            <img className='back' src="%PUBLIC_URL%/../images/icon_Back.svg" alt="" />
                                        </button>
                                        <div className='grid-11'>VOLVER</div>
                                    </div>

                                    <div className='grid grid-12 grid-gap-36'>
                                        <div className='grid-12'>
                                            <Card
                                                gridgap='8px'
                                                title="¡Hola, "
                                                titlered="Juan!"
                                                description="Conoce las coberturas para tu plan"
                                            />
                                        </div>
                                        <div className='grid-12'>

                                            <CardAuto
                                                placa={user.placa}
                                                model={user.modelo}
                                            />
                                        </div>

                                    </div>




                                </div>

                                <div className='grid-12'>
                                    PRICE
                                </div>
                            </div>

                            <div className='toppings grid-12'>
                                <Toppings />
                            </div>
                        </div>

                        <div className="plain_main_price grid-12 grid-xs-4">
                            <h1>MONTO</h1>
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
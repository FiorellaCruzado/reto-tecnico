import React from 'react';
import Button from './Button';

const Amount = () => {
    const data = [
        'Llanta de respuesto',
        'Analisis de motor',
        'Aros gratis'
    ]
    const listItems = data.map((element) =>
        <div className='grid' style={{alignItems: 'center'}}>
            <img className='grid-2' src="%PUBLIC_URL%/../images/ic_check_green.svg" alt="" />
            <li className=' grid-10 amount__li' key={element.toString()}>{element}</li>
        </div>
    );

    return (
        <div className='amount'>
            <div className='amount__content'>
                <div className='amount__title'>Monto</div>
                <div className='amount__price'>$35.00</div>
                <div className='amount__text'>mensuales</div>
            </div>
            <div className='amount__details'>
                <div className='amount__titlelist'>El precio incluye:</div>
                <div>
                    <ul className='amount__ul'>{listItems}</ul>
                </div>
            </div>
            <Button
                type='submit'
                text='lo quiero'
            />
        </div>
    );
};

export default Amount;
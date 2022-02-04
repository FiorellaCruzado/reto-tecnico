import React from 'react';

const CardAuto = ({
  placa,
  model
}) => {
  return (
      <div className="auto">
          <div className="auto__placa">
            Placa: {placa}
          </div>
          <div className="auto__model">
              {model}
          </div>
          <img className='auto__img' src="%PUBLIC_URL%/../images/person_rimac.svg" alt="" />
      </div>
  );
};

export default CardAuto;
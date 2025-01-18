import React, { useState } from 'react';
import { CarEditWrap } from './carInfoStyle';
import { Carbg } from '../Carbg';

const CarEdit = () => {
    Carbg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "./assets/images/edit.png",
    ];


    return (
        <CarEditWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="" />
                </div>

                <div className='info'>
                    <h2>수정페이지</h2>
                    <ul>
                     
                    </ul>
                </div>
            </div>
          
        </CarEditWrap>
    );
};

export default CarEdit;
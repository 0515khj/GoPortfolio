import React from 'react';
import { TeamDBWrap } from './carInfoStyle';
import { Carbg } from '../Carbg';

const CarDB = () => {
    Carbg();
    return (
        <TeamDBWrap>
            <div className="inner">
                <div className="imageWrapper">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/carDB.jpg`} alt="WBS 관련 이미지" />
                </div>
            </div>
        </TeamDBWrap>
    );
};

export default CarDB;
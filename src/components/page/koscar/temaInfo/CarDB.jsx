import React from 'react';
import { TeamDBWrap } from './carInfoStyle';
import { useNavigate } from 'react-router-dom';
import { Carbg } from '../Carbg';

const CarDB = () => {
    Carbg();
    const navigate = useNavigate();
    return (
        <TeamDBWrap>
            <div className="inner">
                <div className="imageWrapper">
                  <img src="/assets/images/carDB.jpg" alt="WBS 관련 이미지" />
                </div>
            </div>
        </TeamDBWrap>
    );
};

export default CarDB;
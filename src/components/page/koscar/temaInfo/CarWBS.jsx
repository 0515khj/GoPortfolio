import React from 'react';
import { TeamWBSWrap } from './carInfoStyle';
import { useNavigate } from 'react-router-dom';
import { Carbg } from '../Carbg';

const CarWBS = () => {
    Carbg();
    const navigate = useNavigate();

    return (
        <TeamWBSWrap>
            <div className="inner">
                <div className="imageWrapper">
                  <img src="/assets/images/carWBS.jpg" alt="WBS 관련 이미지" />
                </div>
            </div>
        </TeamWBSWrap>
    );
};

export default CarWBS;
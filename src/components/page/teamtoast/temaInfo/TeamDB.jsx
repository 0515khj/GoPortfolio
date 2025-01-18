import React from 'react';
import { Teambg } from '../Teambg';
import { TeamDBWrap } from './teamInfoStyle';
import { useNavigate } from 'react-router-dom';

const TeamDB = () => {
    Teambg();
    const navigate = useNavigate();
    return (
        <TeamDBWrap>
            <div className="inner">
               
                <div className="imageWrapper">
                  <img src="/assets/images/db.png" alt="WBS 관련 이미지" />
                </div>
            </div>
        </TeamDBWrap>
    );
};

export default TeamDB;
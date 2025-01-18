import React from 'react';
import { Teambg } from '../Teambg';
import { TeamDBWrap } from './teamInfoStyle';

const TeamDB = () => {
    Teambg();
    return (
        <TeamDBWrap>
            <div className="inner">
               
                <div className="imageWrapper">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/db.png`} alt="WBS 관련 이미지" />
                </div>
            </div>
        </TeamDBWrap>
    );
};

export default TeamDB;
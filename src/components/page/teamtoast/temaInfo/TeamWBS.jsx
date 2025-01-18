import React from 'react';
import { TeamWBSWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';

const TeamWBS = () => {
    Teambg();

    return (
        <TeamWBSWrap>
            <div className="inner">
                <div className="imageWrapper">
                  <img src="./assets/images/WBS.jpg" alt="WBS 관련 이미지" />
                </div>
            </div>
        </TeamWBSWrap>
    );
};

export default TeamWBS;
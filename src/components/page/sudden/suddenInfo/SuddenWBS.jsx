import React from 'react';
import { TeamWBSWrap } from './carInfoStyle';
import { Suddenbg } from '../Suddenbg';

const SuddenWBS = () => {
    Suddenbg();

    return (
        <TeamWBSWrap>
            <div className="inner">
                <div className="imageWrapper">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/carWBS.jpg`} alt="WBS 관련 이미지" />
                </div>
            </div>
        </TeamWBSWrap>
    );
};

export default SuddenWBS;
import React from 'react';
import { TeamWBSWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';
import { useNavigate } from 'react-router-dom';
import TeamSidebar from './TeamSidebar';

const TeamWBS = () => {
    Teambg();
    const navigate = useNavigate();

    return (
        <TeamWBSWrap>
            <div className="inner">
                <div className="imageWrapper">
                  <img src="/assets/images/WBS.jpg" alt="WBS 관련 이미지" />
                </div>
            </div>
        </TeamWBSWrap>
    );
};

export default TeamWBS;
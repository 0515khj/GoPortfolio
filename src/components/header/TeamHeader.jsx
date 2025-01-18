import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderWrap } from './headerStyle';

const TeamHeader = () => {

    const [pick , setPick] = useState('project');

    const pickHeader = (item) =>{
        setPick(item);
    }

    return (
        <HeaderWrap>
            <div className='inner'>
            <ul>
                <Link to={'/'}
                onClick={() =>pickHeader('about')}
                className={pick === 'about' ? 'active' : ''}
                >
                <li>자기소개</li>
                </Link>
                <Link to={"/project"}
                onClick={() =>pickHeader('project')}
                className={pick === 'project' ? 'active' : ''}
                >
                <li>프로젝트</li>
                </Link>
            </ul>
            </div>
        </HeaderWrap>
    );
};

export default TeamHeader;
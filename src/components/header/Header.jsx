import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HeaderWrap } from './headerStyle';

const Header = () => {

    const location = useLocation();

    const [pick , setPick] = useState('about');

    useEffect(()=>{
        if(location.pathname === '/'){
            setPick('about');
        }else{
            setPick('project');
        }
    },[location.pathname])

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

export default Header;
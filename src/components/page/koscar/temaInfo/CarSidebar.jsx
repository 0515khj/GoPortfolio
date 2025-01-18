import React, { useState } from 'react';
import { TeamSidebarWrap } from './carInfoStyle';
import { Link } from 'react-router-dom';

const CarSidebar = () => {
    
    const [pick,setPick] = useState('');

    const cssClick = (item) => {
        setPick(item);
    }

    return (
        <TeamSidebarWrap>
            <div className="inner">
                <div className="side1">
                    <div className='pp'>
                        <ul>
                        <li className='top'
                        >기획/설계</li>
                        <Link to={'/carlay/carWBS'}
                        onClick={()=> cssClick('WBS')}
                        className={pick === 'WBS' ? 'active' : ''}
                        >
                        <li>WBS</li>
                        </Link>
                        <Link to={'/carlay/carDB'}
                         onClick={()=> cssClick('DB')}
                         className={pick === 'DB' ? 'active' : ''}
                        >
                        <li>DB</li>
                        </Link>
                        </ul>
                        <ul>
                        <li className='top'>개발 내용</li>
                        <Link to={'/carlay/carlog'}
                         onClick={()=> cssClick('login')}
                         className={pick === 'login' ? 'active' : ''}
                        >
                        <li>로그인</li>
                        </Link>
                        <Link to={'/carlay/carjoin'}
                         onClick={()=> cssClick('join')}
                         className={pick === 'join' ? 'active' : ''}
                        >
                        <li>회원가입</li>
                        </Link>
                        <Link to={'/carlay/carfind'}
                         onClick={()=> cssClick('find')}
                         className={pick === 'find' ? 'active' : ''}
                        >
                        <li>비밀번호 찾기</li>
                        </Link>
                        <Link to={'/carlay/carprofile'}
                         onClick={()=> cssClick('profile')}
                         className={pick === 'profile' ? 'active' : ''}
                        >
                        <li>마이페이지</li>
                        </Link>
                        <Link to={'/carlay/carsell'}
                         onClick={()=> cssClick('sell')}
                         className={pick === 'sell' ? 'active' : ''}
                        >
                        <li>판매하기</li>
                        </Link>
                        <Link to={'/carlay/carmain'}
                         onClick={()=> cssClick('main')}
                         className={pick === 'main' ? 'active' : ''}
                        >
                        <li>차량 목록</li>
                        </Link>
                        <Link to={'/carlay/cardetail'}
                         onClick={()=> cssClick('detail')}
                         className={pick === 'detail' ? 'active' : ''}
                        >
                        <li>상세페이지</li>
                        </Link>
                        <Link to={'/carlay/caredit'}
                         onClick={()=> cssClick('edit')}
                         className={pick === 'edit' ? 'active' : ''}
                        >
                        <li>수정페이지</li>
                        </Link>
                       
                        </ul>
                       
                    </div>
                </div>

            </div>
        </TeamSidebarWrap>
    );
};

export default CarSidebar;
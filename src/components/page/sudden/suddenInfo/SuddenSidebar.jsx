import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SuddenSidebarWrap } from './suddenInfoStyle';

const SuddenSidebar = () => {
    
    const [pick,setPick] = useState('');

    const cssClick = (item) => {
        setPick(item);
    }

    return (
        <SuddenSidebarWrap>
            <div className="inner">
                <div className="side1">
                    <div className='pp'>
                        
                        <ul>
                        <li className='top'>개발 내용</li>

                        <Link to={'/suddenlay/suddenlog'}
                         onClick={()=> cssClick('login')}
                         className={pick === 'login' ? 'active' : ''}
                        >
                        <li>로그인</li>
                        </Link>

                        <Link to={'/suddenlay/suddenjoin'}
                         onClick={()=> cssClick('join')}
                         className={pick === 'join' ? 'active' : ''}
                        >
                        <li>회원가입</li>
                        </Link>

                        <Link to={'/suddenlay/clan'}
                         onClick={()=> cssClick('clan')}
                         className={pick === 'clan' ? 'active' : ''}
                        >
                        <li>클랜</li>
                        </Link>

                        <Link to={'/suddenlay/market'}
                         onClick={()=> cssClick('market')}
                         className={pick === 'market' ? 'active' : ''}
                        >
                        <li>마켓</li>
                        </Link>

                        <Link to={'/suddenlay/notice'}
                         onClick={()=> cssClick('notice')}
                         className={pick === 'notice' ? 'active' : ''}
                        >
                        <li>게시판</li>
                        </Link>

                        <Link to={'/suddenlay/customer'}
                         onClick={()=> cssClick('customer')}
                         className={pick === 'customer' ? 'active' : ''}
                        >
                        <li>고객문의</li>
                        </Link>

                        <Link to={'/suddenlay/cart'}
                         onClick={()=> cssClick('cart')}
                         className={pick === 'cart' ? 'active' : ''}
                        >
                        <li>장바구니</li>
                        </Link>
                       
                        </ul>
                       
                    </div>
                </div>

            </div>
        </SuddenSidebarWrap>
    );
};

export default SuddenSidebar;
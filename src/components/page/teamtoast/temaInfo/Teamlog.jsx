import React from 'react';
import { TeamlogWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';

const Teamlog = () => {
    Teambg();

    return (
        <TeamlogWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/login.jpg`} alt="WBS 관련 이미지" />
                </div>

                <div className='info'>
                    <h2>로그인</h2>
                    <ul>
                        <li>
                            <strong>이메일, 비밀번호 입력</strong>
                            <p>해당 페이지에선 이메일과 비밀번호를 입력 후 로그인 할 수 있습니다</p>
                        </li>
                    </ul>
                </div>
            </div>
          
        </TeamlogWrap>
    );
};

export default Teamlog;
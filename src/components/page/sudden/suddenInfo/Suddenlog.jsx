import React from 'react';
import { Suddenbg } from '../Suddenbg';
import { SuddenlogWrap } from './suddenInfoStyle';

const Suddenlog = () => {
    Suddenbg();

    return (
        <SuddenlogWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/carlog.png`} alt="" />
                </div>

                <div className='info'>
                    <h2>로그인</h2>
                    <ul>
                        <li>
                            <strong>아이디, 비밀번호 입력</strong>
                            <p>해당 페이지에선 아이디와 비밀번호를 입력 후 로그인 할 수 있습니다</p>
                        </li>
                    </ul>
                </div>
            </div>
          
        </SuddenlogWrap>
    );
};

export default Suddenlog;
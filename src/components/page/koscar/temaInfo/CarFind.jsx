import React from 'react';
import { TeamFindWrap, TeamlogWrap } from './carInfoStyle';
import { useNavigate } from 'react-router-dom';
import { Carbg } from '../Carbg';

const CarFind = () => {
    Carbg();
    const navigate = useNavigate();

    return (
        <TeamFindWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src="/assets/images/carfind.png" alt="WBS 관련 이미지" />
                </div>

                <div className='info'>
                    <h2>비밀번호 찾기</h2>
                    <ul>
                        <li>
                            <strong>이름, 아이디, 이메일 입력</strong>
                            <p>이름과 아이디,이메일을 입력했을 때 해당하는 이름과 아이디,이메일이 있을경우 비밀번호를 재설정 할 수 있습니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
          
        </TeamFindWrap>
    );
};

export default CarFind;
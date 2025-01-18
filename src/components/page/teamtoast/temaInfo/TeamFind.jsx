import React from 'react';
import { TeamFindWrap,  } from './teamInfoStyle';
import { Teambg } from '../Teambg';

const TeamFind = () => {
    Teambg();

    return (
        <TeamFindWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/find_resized.jpg`} alt="WBS 관련 이미지" />
                </div>

                <div className='info'>
                    <h2>비밀번호 찾기</h2>
                    <ul>
                        <li>
                            <strong>이름, 이메일 입력</strong>
                            <p>이름과 이메일을 입력했을 때 해당하는 이름과 이메일이 있을경우 비밀번호를 재설정 할 수 있습니다.</p>
                        </li>
                    </ul>
                    {/* <p>이름과 이메일을 입력했을 때 해당하는 이름과 이메일이 있을경우 비밀번호를 재설정 할 수 있습니다.</p> */}
                </div>
            </div>
          
        </TeamFindWrap>
    );
};

export default TeamFind;
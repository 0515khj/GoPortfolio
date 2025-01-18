import React from 'react';
import { TeamJoinWrap } from './carInfoStyle';
import { useNavigate } from 'react-router-dom';
import { Carbg } from '../Carbg';

const CarJoin = () => {
    Carbg();

    return (
        <TeamJoinWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/carjoin.png`} alt="" />
                </div>

                <div className='info'>
                    <h2>회원가입</h2>
                    <ul>
                        <li>
                            <strong>이름, 아이디, 이메일, 휴대폰번호, 비밀번호 입력</strong>
                            <p>이름, 아이디, 이메일, 휴대폰번호, 비밀번호를 입력한 후 회원가입을 진행할 수 있습니다.</p>
                        </li>
                        <li>
                            <strong>이메일 중복 확인</strong>
                            <p>이메일 입력 후 <b>중복확인</b> 버튼을 클릭하면, 데이터베이스에서 중복 여부를 확인한 뒤 사용 가능한 이메일인지 안내합니다.</p>
                        </li>
                        <li>
                            <strong>휴대폰번호 인증</strong>
                            <p>
                                휴대폰번호 입력 후 <b>인증하기</b> 버튼을 클릭하면 데이터베이스에서 중복 여부를 확인합니다.
                                중복된 번호일 경우 안내 메시지가 출력되고, 사용 가능한 번호일 경우 인증코드가 발송됩니다.
                            </p>
                        </li>
                        <li>
                            <strong>비밀번호 확인</strong>
                            <p>두 칸에 동일한 비밀번호를 입력해야만 회원가입이 완료됩니다.</p>
                        </li>
                    </ul>
                </div>

            </div>
          
        </TeamJoinWrap>
    );
};

export default CarJoin;
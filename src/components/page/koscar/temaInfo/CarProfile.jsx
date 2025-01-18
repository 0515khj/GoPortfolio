import React, { useState } from 'react';
import { TeamProfileWrap } from './carInfoStyle';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";
import { Carbg } from '../Carbg';

const CarProfile = () => {
    Carbg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        `${process.env.PUBLIC_URL}/assets/images/mypage1.png`,
        `${process.env.PUBLIC_URL}/assets/images/mypage2.png`,
    ];

    const GoPrev = ()=> {
        setCurrentimg((previmg)=>
            previmg === 0 ? img.length -1 : previmg - 1
        );
    };

    const GoNext = ()=> {
        setCurrentimg((previmg)=>
            previmg ===  img.length -1 ? 0 : previmg + 1
        );
    }

    const navigate = useNavigate();

    return (
        <TeamProfileWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="WBS 관련 이미지" />
                  <button className='prevBtn' onClick={GoPrev}><FaChevronLeft /></button>
                  <button className='nextBtn' onClick={GoNext}><FaChevronRight /></button>
                </div>

                <div className='info'>
                    <h2>마이페이지</h2>
                    <ul>
                      <li><strong>마이페이지</strong></li>
                        <li>
                          로그인 후 마이페이지에서 찜한 차량 목록과 판매 차량 목록을 확인할 수 있다.
                        </li>
                        <li>
                          찜한 차량 과 판매 차량 은 각각 별도 섹션에 표시되며, 버튼 클릭 시 추가/제거 기능 제공함.
                        </li>
                        <li>
                          회원정보 수정 버튼을 통해 개인정보 수정 가능.
                        </li>
                    </ul>

                    <ul>
                      <li><strong>회원정보 수정</strong></li>
                        <li>
                          수정 가능한 항목: 휴대폰 번호, 이메일, 비밀번호.
                        </li>
                        <li>
                          수정된 정보는 저장 버튼 클릭 시 서버로 전송되며, 성공 시 정보가 수정됩니다.
                        </li>
                    </ul>
                </div>
            </div>
          
        </TeamProfileWrap>
    );
};

export default CarProfile;
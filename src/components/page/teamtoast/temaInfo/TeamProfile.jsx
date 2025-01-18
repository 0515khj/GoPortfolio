import React, { useState } from 'react';
import { TeamFindWrap, TeamlogWrap, TeamProfileWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";

const TeamProfile = () => {
    Teambg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "/assets/images/profile.jpg",
        "/assets/images/profileFind.jpg"
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
                    <h2>프로필</h2>
                    <ul>
                         <li>
                             <strong>프로필 정보 확인</strong><br />
                             현재 접속한 사용자의 이름, 이메일 등 기본 정보를 확인할 수 있습니다.
                         </li>
                         <li>
                             <strong>이름 및 이메일 수정</strong><br />
                             사용자는 자신의 이름과 이메일 정보를 직접 수정할 수 있습니다.
                         </li>
                         <li>
                             <strong>비밀번호 변경</strong><br />
                             현재 비밀번호를 새로운 비밀번호로 변경할 수 있습니다. 이를 통해 계정을 더욱 안전하게 관리할 수 있습니다.
                         </li>
                         <li>
                             <strong>변경 사항 저장</strong><br />
                             모든 수정 사항은 저장 버튼을 클릭한 후 실시간으로 업데이트됩니다.
                         </li>
                    </ul>
                </div>
            </div>
          
        </TeamProfileWrap>
    );
};

export default TeamProfile;
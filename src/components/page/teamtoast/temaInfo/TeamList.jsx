import React, { useState } from 'react';
import { TeamFindWrap, TeamListWrap, TeamlogWrap, TeamProfileWrap, TeamProjectWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";

const TeamList = () => {
    Teambg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "/assets/images/teamlist.jpg",
        "/assets/images/teamadd.jpg"
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
        <TeamListWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="WBS 관련 이미지" />
                  <button className='prevBtn' onClick={GoPrev}><FaChevronLeft /></button>
                  <button className='nextBtn' onClick={GoNext}><FaChevronRight /></button>
                </div>

                <div className='info'>
                    <h2>팀 목록</h2>
                    <ul>
                    <li>
                      <strong>팀원 목록 확인</strong><br />
                      현재 스페이스에 속한 모든 팀원을 한눈에 확인할 수 있습니다. 팀원의 <strong>이름</strong>, <strong>이메일</strong>, <strong>직급</strong> 정보가 표시됩니다.
                    </li>
                    <li>
                      <strong>팀원 초대</strong><br />
                      새로운 팀원을 초대할 수 있는 기능입니다. 초대 버튼을 클릭하면 <strong>초대 모달</strong>이 열리며, 아래 항목을 입력하여 초대할 수 있습니다.
                      <ul>
                        <li><strong>이메일</strong>: 초대할 팀원의 이메일을 입력합니다.</li>
                        <li><strong>역할(직급)</strong>: 초대받은 사용자의 기본 직급(예: 팀원, 관리자)을 설정합니다.</li>
                        <li>초대는 <strong>TeamToast 회원</strong>만 가능합니다. 비회원은 가입 후 초대를 받을 수 있습니다.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>권한 수정</strong><br />
                      관리자는 팀원의 권한을 수정할 수 있습니다. 권한 변경은 즉시 반영됩니다.
                    </li>
                    <li>
                      <strong>팀원 삭제</strong><br />
                      관리자는 팀원 삭제 기능을 통해 팀원을 목록에서 제거할 수 있습니다. 삭제 버튼을 클릭하면 <strong>확인 팝업</strong>이 나타나며, 실수로 삭제하는 것을 방지할 수 있습니다.
                    </li>
                    </ul>
                </div>
            </div>
          
        </TeamListWrap>
    );
};

export default TeamList;
import React, { useState } from 'react';
import { TeamFindWrap, TeamlogWrap, TeamProfileWrap, TeamSpaceWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";

const TeamSpace = () => {
    Teambg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "/assets/images/space.jpg",
        "/assets/images/spaceadd.jpg",
        "/assets/images/spaceedit.jpg",
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
        <TeamSpaceWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="WBS 관련 이미지" />
                  <button className='prevBtn' onClick={GoPrev}><FaChevronLeft /></button>
                  <button className='nextBtn' onClick={GoNext}><FaChevronRight /></button>
                </div>

                <div className='info'>
                    <h2>스페이스</h2>
                 <ul>
                    <li>
                        <strong>스페이스 목록</strong><br />
                        현재 사용자가 접근 가능한 모든 스페이스 목록이 화면에 표시됩니다. 스페이스는 이름과 색상으로 구분되며, 클릭하면 해당 스페이스로 이동하여 프로젝트를 확인할 수 있습니다.
                    </li>
                    <li>
                        <strong>스페이스 생성</strong><br />
                        새로운 스페이스를 추가할 수 있는 기능입니다. 상단의 스페이스 생성 버튼을 클릭하여 스페이스 이름을 입력한 후 저장하면 목록에 추가됩니다.
                    </li>
                    <li>
                        <strong>스페이스 관리</strong><br />
                        스페이스 관리 페이지는 관리자만 접근 가능합니다. 이 페이지에서는 다음과 같은 작업을 수행할 수 있습니다.
                        <ul>
                            <li>
                                <strong>스페이스 이름 수정</strong><br />
                                스페이스 이름을 원하는 이름으로 변경할 수 있습니다. 수정 후 저장 버튼을 눌러 변경 사항을 적용합니다.
                            </li>
                            <li>
                                <strong>스페이스 삭제</strong><br />
                                스페이스 이름을 정확히 입력한 후 삭제 버튼을 클릭하면 스페이스 내 모든 데이터가 영구적으로 삭제됩니다.
                            </li>
                        </ul>
                    </li>
                 </ul>
                </div>
            </div>
          
        </TeamSpaceWrap>
    );
};

export default TeamSpace;
import React, { useState } from 'react';
import { TeamFindWrap, TeamlogWrap, TeamProfileWrap, TeamProjectWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";

const TeamProject = () => {
    Teambg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "/assets/images/project2.jpg",
        "/assets/images/projectadd.jpg",
        "/assets/images/projectedit.jpg",
        "/assets/images/prjectdel.jpg",
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
        <TeamProjectWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="WBS 관련 이미지" />
                  <button className='prevBtn' onClick={GoPrev}><FaChevronLeft /></button>
                  <button className='nextBtn' onClick={GoNext}><FaChevronRight /></button>
                </div>

                <div className='info'>
                    <h2>프로젝트</h2>
                 <ul>
                    <li>
                        <strong>프로젝트 리스트 페이지</strong><br />
                        스페이스를 클릭하면 해당 스페이스에 속한 모든 프로젝트들이 표시됩니다. 프로젝트는 목록 형태로 정렬되어 있으며 각 프로젝트의 이름과 설명을 확인할 수 있습니다.
                    </li>
                    <li>
                        <strong>프로젝트 생성</strong><br />
                        새로운 프로젝트를 생성할 수 있는 기능입니다. 프로젝트 이름과 설명을 입력한 뒤 생성 버튼을 클릭하여 해당 스페이스에 새로운 프로젝트를 추가할 수 있습니다.
                    </li>
                    <li>
                        <strong>프로젝트 수정</strong><br />
                        기존에 생성된 프로젝트의 이름이나 설명을 수정할 수 있습니다. 수정 아이콘을 클릭하여 필요한 변경 사항을 입력하고 저장할 수 있습니다.
                    </li>
                    <li>
                        <strong>프로젝트 삭제</strong><br />
                        프로젝트를 삭제할 수 있는 기능입니다. 삭제 버튼을 클릭하면 선택된 프로젝트가 리스트에서 제거됩니다. 삭제 전 확인 메시지가 표시되어 실수로 삭제하는 것을 방지합니다.
                    </li>
                 </ul>
                </div>
            </div>
          
        </TeamProjectWrap>
    );
};

export default TeamProject;
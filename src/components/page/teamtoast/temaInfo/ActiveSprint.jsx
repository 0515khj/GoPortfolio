import React, { useState } from 'react';
import { ActiveSprintWrap, TeamFindWrap, TeamlogWrap, TeamProfileWrap, TeamSpaceWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";

const ActiveSprint = () => {
    Teambg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "/assets/images/sprint.jpg",
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
        <ActiveSprintWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="WBS 관련 이미지" />
                  <button className='prevBtn' onClick={GoPrev}><FaChevronLeft /></button>
                  <button className='nextBtn' onClick={GoNext}><FaChevronRight /></button>
                </div>

                <div className='info'>
                    <h2>스프린트</h2>
                 <ul>
                 <li>
          <strong>스프린트 구성</strong>
          <br />
          작업 항목을 카테고리로 구분하여 칸반보드 형식으로 표시됩니다. 이를 통해 팀원들이 현재 작업 상태를 한눈에 확인할 수 있습니다.
        </li>
        <li>
          <strong>작업 분류</strong>
          <br />
          작업은 백로그에서 시작하여 진행 중, 개발 완료, QA 완료 등으로 이동하며 프로젝트의 진행 상황을 단계별로 관리할 수 있습니다.
        </li>
        <li>
          <strong>작업 유형</strong>
          <br />
          작업 항목은 작업과 버그로 구분됩니다. 각 항목은 담당자와 함께 표시되어 책임이 명확히 드러납니다.
        </li>
        <li>
          <strong>스프린트 완료</strong>
          <br />
          모든 작업 항목이 완료되면 "스프린트 완료" 버튼을 클릭하여 스프린트를 종료할 수 있습니다.
        </li>
        <li>
          <strong>작업 우선순위 및 필터링</strong>
          <br />
          작업은 우선순위 및 담당자 기준으로 필터링할 수 있어 중요한 작업을 효율적으로 관리할 수 있습니다.
        </li>
                 </ul>
                </div>
            </div>
          
        </ActiveSprintWrap>
    );
};

export default ActiveSprint;
import React, { useState } from 'react';
import { ActiveSprintWrap, TeamFindWrap, TeamlogWrap, TeamProfileWrap, TeamSpaceWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";

const IssueList = () => {
    Teambg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "/assets/images/issue.jpg",
    ];

    const navigate = useNavigate();

    return (
        <ActiveSprintWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="WBS 관련 이미지" />
                </div>

                <div className='info'>
                    <h2>이슈 목록</h2>
                 <ul>
                 <li>
            <strong>이슈 관리</strong><br />
            이슈 목록 페이지에서는 모든 이슈를 한눈에 확인할 수 있습니다.
        </li>
        <li>
            <strong>검색 및 필터링</strong><br />
            상단의 검색 바와 필터를 활용하여 이슈를 검색할 수 있습니다. 담당자, 유형, 상태, 우선순위 등 이슈를 필터링할 수 있습니다.
        </li>
        <li>
            <strong>이슈 유형</strong><br />
            이슈는 작업 또는 버그 유형으로 구분되며 이를 통해 시각적으로 작업의 성격을 파악할 수 있습니다.
        </li>
        <li>
            <strong>우선순위 및 상태</strong><br />
            우선순위가 설정되어 있어 작업의 중요도를 판단할 수 있습니다. 현재 상태를 통해 작업 진행을 확인할 수 있습니다.
        </li>
        <li>
            <strong>이슈 담당자</strong><br />
            각 이슈에는 담당자가 지정되어 있어 책임 소재가 명확합니다. 담당자별로 이슈를 정렬하거나 필터링하여 작업을 효율적으로 분배할 수 있습니다.
        </li>
                 </ul>
                </div>
            </div>
          
        </ActiveSprintWrap>
    );
};

export default IssueList;
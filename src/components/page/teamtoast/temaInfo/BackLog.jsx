import React, { useState } from 'react';
import { ActiveSprintWrap, TeamFindWrap, TeamlogWrap, TeamProfileWrap, TeamSpaceWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";

const BackLog = () => {
    Teambg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "/assets/images/back.jpg",
        "/assets/images/back2.jpg",
        "/assets/images/back3.jpg",
        "/assets/images/back4.jpg",
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
                    <h2>백로그</h2>
                 <ul>
                 <li>
            <strong>백로그 관리</strong><br />
            백로그 페이지에서는 모든 작업 항목이 목록 형태로 정렬되어 표시됩니다.
        </li>
        <li>
            <strong>스프린트 구성</strong><br />
            백로그에 등록된 작업 항목을 선택하여 새로운 스프린트에 포함시킬 수 있습니다.
        </li>
        <li>
            <strong>필터링 및 정렬</strong><br />
            작업 항목을 담당자, 작업 상태, 우선순위 등의 조건으로 필터링하거나 정렬할 수 있습니다. 
        </li>
        <li>
            <strong>스프린트 완료</strong><br />
            완료된 스프린트는 "스프린트 완료" 버튼을 통해 종료할 수 있으며, 관련 작업 항목들은 자동으로 완료 상태로 표시됩니다. 
        </li>
        <li>
            <strong>스프린트 생성</strong><br />
            새로운 스프린트를 생성하려면 백로그 페이지에서 작업 항목을 선택하고 "스프린트 생성" 버튼을 클릭하면 됩니다. 
            스프린트 생성 시 이름, 시작 날짜, 종료 날짜 및 목표를 설정할 수 있습니다.
        </li>
                 </ul>
                </div>
            </div>
          
        </ActiveSprintWrap>
    );
};

export default BackLog;
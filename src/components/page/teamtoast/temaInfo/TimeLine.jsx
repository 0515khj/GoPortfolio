import React, { useState } from 'react';
import { ActiveSprintWrap, TeamFindWrap, TeamlogWrap, TeamProfileWrap, TeamSpaceWrap } from './teamInfoStyle';
import { Teambg } from '../Teambg';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";

const TimeLine = () => {
    Teambg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "/assets/images/time.jpg",
    ];

    // const GoPrev = ()=> {
    //     setCurrentimg((previmg)=>
    //         previmg === 0 ? img.length -1 : previmg - 1
    //     );
    // };

    // const GoNext = ()=> {
    //     setCurrentimg((previmg)=>
    //         previmg ===  img.length -1 ? 0 : previmg + 1
    //     );
    // }

    const navigate = useNavigate();

    return (
        <ActiveSprintWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="" />
                  {/* <button className='prevBtn' onClick={GoPrev}><FaChevronLeft /></button>
                  <button className='nextBtn' onClick={GoNext}><FaChevronRight /></button> */}
                </div>

                <div className='info'>
                    <h2>타임라인</h2>
                 <ul>
                 <li>
                            <strong>기능 개요</strong>
                            <br />
                            타임라인 페이지에서는 프로젝트의 모든 스프린트 작업이
                            한눈에 확인 가능한 간트 차트 형식으로 표시됩니다.
                        </li>
                        <li>
                            <strong>주요 특징</strong>
                            <br />
                            - 작업 항목을 드래그 앤 드롭(DND)으로 이동하며 일정을
                            조정할 수 있습니다.
                            <br />
                            - 각 작업의 제목, 시작일, 종료일을 시각적으로
                            확인할 수 있어 일정 관리가 용이합니다.
                        </li>
                        <li>
                            <strong>사용 기술</strong>
                            <br />
                            - <code>gantt-task-react</code> 라이브러리를 활용하여
                            간트 차트를 구현하였습니다.
                        </li>
                 </ul>
                </div>
            </div>
          
        </ActiveSprintWrap>
    );
};

export default TimeLine;
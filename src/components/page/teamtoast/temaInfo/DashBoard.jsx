import React, { useState } from 'react';
import { ActiveSprintWrap} from './teamInfoStyle';
import { Teambg } from '../Teambg';

const DashBoard = () => {
    Teambg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "./assets/images/dash.jpg",
    ];

 


    return (
        <ActiveSprintWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="WBS 관련 이미지" />
                </div>

                <div className='info'>
                    <h2>대시보드</h2>
                 <ul>
                        <li>
                            <strong>이슈 진행 상태</strong><br />
                            대시보드에는 전체 이슈의 진행 상태가 파이 차트 형태로 표시됩니다. 이를 통해 백로그, 진행 중, 개발 완료, QA 완료 상태의 작업 비율을 직관적으로 확인할 수 있습니다.
                        </li>
                        <li>
                            <strong>팀원별 이슈 현황</strong><br />
                            각 팀원이 맡은 이슈가 히스토그램으로 시각화되어 표시됩니다. 이를 통해 팀원별 업무 분배와 작업 진행 상태를 한눈에 파악할 수 있습니다.
                        </li>
                        <li>
                            <strong>목표 및 일정</strong><br />
                            대시보드 하단에는 프로젝트 목표와 남은 기간, 시작일과 마감일이 표시됩니다. 이를 통해 프로젝트의 진행 상황과 일정 관리를 효율적으로 할 수 있습니다.
                        </li>
                 </ul>
                </div>
            </div>
          
        </ActiveSprintWrap>
    );
};

export default DashBoard;
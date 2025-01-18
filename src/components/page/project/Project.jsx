import React, { useEffect } from 'react';
import { ProjectWrap } from './projectStyle';
import { Link } from 'react-router-dom';

const Project = () => {
    useEffect(() => {
            document.body.style.backgroundColor = '#333';
            return () => {
              document.body.style.backgroundColor = ''; 
            };
          }, []);
    
    return (
        <ProjectWrap>
             <div className="timeline">
        <div className="timeline-point" style={{ left: '12%' }}></div>
        <div className="timeline-point" style={{ left: '50%' }}></div>
        <div className="timeline-point" style={{ left: '87%' }}></div>
      </div>
    
      <div className="projects">
    
        <div className="project-item">
        <Link to={'/team'}>
          <div className="category">팀 프로젝트</div>
          <div className="date">2024.11~2024.12</div>
          <img src="/assets/images/cover.png" alt="Pedal" className="icon" />
          <div className="title">TeamToast</div>
          <div className="description">
            프론트엔드 & 백엔드<br />
            업무 관리 협업 툴 플랫폼 서비스
          </div>
        </Link>
        </div>

        <div className="project-item">
        <Link to={'/car'}>
          <div className="category">팀 프로젝트</div>
          <div className="date">2024.10~2024.10</div>
          <img src="/assets/images/koscar.png" alt="DDV" className="icon" />
          <div className="title">KOSCAR</div>
          <div className="description">
            프론트엔드 & 백엔드<br />
            개인 거래 중고차 플랫폼
          </div>
          </Link>
        </div>

        <div className="project-item">
          <div className="category">개인 프로젝트</div>
          <div className="date">2023.11~2023.12</div>
          <img src="/assets/images/sudden.jpg" alt="Thanks for Coming" className="icon" />
          <div className="title">Sudden Attack</div>
          <div className="description">
            프론트엔드<br />
            게임 페이지 쇼핑몰 버전
          </div>
        </div>

      </div>
            
        </ProjectWrap>
    );
};

export default Project;
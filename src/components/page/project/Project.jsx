import React, { useEffect, useState } from 'react';
import { ProjectWrap } from './projectStyle';
import { Link } from 'react-router-dom';
import { ClimbingBoxLoader, PacmanLoader } from 'react-spinners';

const Project = () => {

    const [loading , setLoading] = useState(true);


    useEffect(() => {
            document.body.style.backgroundColor = '#333';
            const spinnerTimeout = setTimeout(()=>{
                setLoading(false);
            },1000)
            return () => {
              document.body.style.backgroundColor = ''; 
              clearTimeout(spinnerTimeout);
            };
          }, []);
    
    if(loading){
      return(
        <ProjectWrap>
         <div className="spinner">
          <PacmanLoader color="#333" size={30} />
        </div>
      </ProjectWrap>
      )
    }
      
    
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
          <img src={ `${process.env.PUBLIC_URL}/assets/images/cover.png`} alt="" className="icon" />
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
          <img src={ `${process.env.PUBLIC_URL}/assets/images/koscar.png`} alt="" className="icon" />
          <div className="title">KOSCAR</div>
          <div className="description">
            프론트엔드 & 백엔드<br />
            개인 거래 중고차 플랫폼
          </div>
          </Link>
        </div>

        <div className="project-item">
        <Link to={'/sudden'}>
          <div className="category">개인 프로젝트</div>
          <div className="date">2023.11~2023.12</div>
          <img src={ `${process.env.PUBLIC_URL}/assets/images/sudden.jpg`} alt="" className="icon" />
          <div className="title">SuddenAttack</div>
          <div className="description">
            프론트엔드<br />
            게임 페이지 쇼핑몰 버전
          </div>
        </Link>
        </div>

      </div>
            
        </ProjectWrap>
    );
};

export default Project;
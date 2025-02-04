import React, { useEffect, useState } from 'react';
import { ProjectWrap } from './projectStyle';
import { Link } from 'react-router-dom';
import { ClimbingBoxLoader, PacmanLoader } from 'react-spinners';

const Project = () => {


    const [projectText , setProjectText] = useState(false);

    const textMove = (text) =>{
      return text.split('').map((item,idx)=>(
        <span key={idx} style={{animationDelay:`${ idx * 0.3}s`}}>{item}</span>
      ))
    }

    useEffect(() => {
            document.body.style.backgroundColor = '#333';
           
            return () => {
              document.body.style.backgroundColor = ''; 
            };
          }, []);
      
    
    return (
        <ProjectWrap>
      <div className={`text ${projectText ? 'move' : ''}`}>
        <span style={{marginRight:'50px'}}>{textMove('PROJECT')}</span>
        <span>{textMove('TIMELINE')}</span>
      </div>
             <div className="timeline">
        <div className="timeline-point" style={{ left: '9%' }}></div>
        <div className="timeline-point" style={{ left: '36%' }}></div>
        <div className="timeline-point" style={{ left: '64%' }}></div>
        <div className="timeline-point" style={{ left: '91%' }}></div>
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

        <div className="project-item">
        <Link to={'/myreal'}>
          <div className="category">팀 프로젝트</div>
          <div className="date">2023.10~2023.10</div>
          <div className="myimg">
          <img src={ `${process.env.PUBLIC_URL}/assets/images/my.png`} alt="" className="icon" />
          </div>
          <div className="title">Myrealtrip</div>
          <div className="description">
            프론트엔드(JavaScript)<br />
            여행사 홈페이지 
          </div>
        </Link>
        </div>

      </div>
            
        </ProjectWrap>
    );
};

export default Project;
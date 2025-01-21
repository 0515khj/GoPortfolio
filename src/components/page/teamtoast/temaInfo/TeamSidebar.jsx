import React, { useState } from 'react';
import { TeamSidebarWrap } from './teamInfoStyle';
import { Link } from 'react-router-dom';

const TeamSidebar = () => {
    
    const [pick,setPick] = useState('');

    const cssClick = (item) => {
        setPick(item);
    }

    return (
        <TeamSidebarWrap>
            <div className="inner">
                <div className="side1">
                    <div className='pp'>
                        <ul>
                        <li className='top'
                        >기획/설계</li>
                        <Link to={'/lay/teamWBS'}
                        onClick={()=> cssClick('WBS')}
                        className={pick === 'WBS' ? 'active' : ''}
                        >
                        <li>WBS</li>
                        </Link>
                        <Link to={'/lay/teamDB'}
                         onClick={()=> cssClick('DB')}
                         className={pick === 'DB' ? 'active' : ''}
                        >
                        <li>DB</li>
                        </Link>
                        </ul>
                        <ul>
                        <li className='top'>개발 내용</li>
                        <Link to={'/lay/teamlog'}
                         onClick={()=> cssClick('login')}
                         className={pick === 'login' ? 'active' : ''}
                        >
                        <li>로그인(담당)</li>
                        </Link>
                        <Link to={'/lay/teamjoin'}
                         onClick={()=> cssClick('join')}
                         className={pick === 'join' ? 'active' : ''}
                        >
                        <li>회원가입(담당)</li>
                        </Link>
                        <Link to={'/lay/teamfind'}
                         onClick={()=> cssClick('find')}
                         className={pick === 'find' ? 'active' : ''}
                        >
                        <li>비밀번호 찾기(담당)</li>
                        </Link>
                        <Link to={'/lay/teamprofile'}
                         onClick={()=> cssClick('profile')}
                         className={pick === 'profile' ? 'active' : ''}
                        >
                        <li>프로필(담당)</li>
                        </Link>
                        <Link to={'/lay/teamspace'}
                         onClick={()=> cssClick('space')}
                         className={pick === 'space' ? 'active' : ''}
                        >
                        <li>스페이스(담당)</li>
                        </Link>
                        <Link to={'/lay/teamproject'}
                         onClick={()=> cssClick('project')}
                         className={pick === 'project' ? 'active' : ''}
                        >
                        <li>프로젝트</li>
                        </Link>
                        <Link to={'/lay/teamlist'}
                         onClick={()=> cssClick('teamlist')}
                         className={pick === 'teamlist' ? 'active' : ''}
                        >
                        <li>팀 목록</li>
                        </Link>
                        <Link to={'/lay/sprint'}
                         onClick={()=> cssClick('sprint')}
                         className={pick === 'sprint' ? 'active' : ''}
                        >
                        <li>스프린트</li>
                        </Link>
                        <Link to={'/lay/dash'}
                         onClick={()=> cssClick('dash')}
                         className={pick === 'dash' ? 'active' : ''}
                        >
                        <li>대시보드</li>
                        </Link>
                        <Link to={'/lay/back'}
                         onClick={()=> cssClick('back')}
                         className={pick === 'back' ? 'active' : ''}
                        >
                        <li>백로그</li>
                        </Link>
                        <Link to={'/lay/issue'}
                         onClick={()=> cssClick('issue')}
                         className={pick === 'issue' ? 'active' : ''}
                        >
                        <li>이슈 목록</li>
                        </Link>
                        <Link to={'/lay/time'}
                         onClick={()=> cssClick('time')}
                         className={pick === 'time' ? 'active' : ''}
                        >
                        <li>타임라인</li>
                        </Link>
                        </ul>
                       
                    </div>
                </div>

            </div>
        </TeamSidebarWrap>
    );
};

export default TeamSidebar;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import TeamSidebar from './page/teamtoast/temaInfo/TeamSidebar';
import styled from 'styled-components';
import TeamHeader from './header/TeamHeader';
import Header from './header/Header';


const LayoutWrap = styled.div`
display: flex;
flex-direction: column;
`;

const ContentWrap = styled.div`
display: flex;
  background-color: #f9f9f9; 
  border-radius: 8px; 
  width: 90%; 
  height: 85vh;
  margin: 20px auto; 
  position: relative;
  box-sizing: border-box;
  a {
            text-decoration: none;
            color:#000;
        }

  .side{
    width: 20%;
    background: #e5e5e5;
    /* padding: 20px; */
    box-sizing: border-box;
    border-top-left-radius: 8px;
    border-bottom-left-radius:8px;
    height: auto;
    overflow-y: auto;
    position: relative;

    .pp{
        .top{
            background: #999;
            color:#fff;
        }
    }

    h1{
      padding: 20px;
      position: sticky; 
      top: 0; 
      font-size: 1.5rem;
      font-weight: bold;
      color: #038c8c;
      margin-bottom: 20px;
      background-color: #e5e5e5;
      height : 70px;
      z-index: 10;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    }
    ul{
        li{
        }
    }
  }
  .main{
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }


`;


const TeamLayout = () => {
    return (
        <div>
            <Header/>
            <LayoutWrap>
                <ContentWrap>
                <div className="side">
                <Link to={'/team'}>
                <h1>TeamToast</h1>
                </Link>
                <TeamSidebar/>
                </div>
                <div className="main">
                <Outlet/>
                </div>
                </ContentWrap>
            </LayoutWrap>
        </div>
    );
};

export default TeamLayout;
import React from 'react';
import Intro from './components/page/intro/Intro';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';
import GlobalStyle from './components/style/GlobalStyle';
import Project from './components/page/project/Project';
import TeamToast from './components/page/teamtoast/TeamToast';
import TeamWBS from './components/page/teamtoast/temaInfo/TeamWBS';
import TeamDB from './components/page/teamtoast/temaInfo/TeamDB';
import Teamlog from './components/page/teamtoast/temaInfo/Teamlog';
import TeamLayout from './components/TeamLayout';
import TeamJoin from './components/page/teamtoast/temaInfo/TeamJoin';
import TeamFind from './components/page/teamtoast/temaInfo/TeamFind';
import TeamProfile from './components/page/teamtoast/temaInfo/TeamProfile';
import TeamSpace from './components/page/teamtoast/temaInfo/TeamSpace';
import TeamProject from './components/page/teamtoast/temaInfo/TeamProject';
import TeamList from './components/page/teamtoast/temaInfo/TeamList';
import ActiveSprint from './components/page/teamtoast/temaInfo/ActiveSprint';
import DashBoard from './components/page/teamtoast/temaInfo/DashBoard';
import BackLog from './components/page/teamtoast/temaInfo/BackLog';
import IssueList from './components/page/teamtoast/temaInfo/IssueList';
import TimeLine from './components/page/teamtoast/temaInfo/TimeLine';
import KosCarLayout from './components/KosCarLayout ';
import KosCar from './components/page/koscar/KosCar';
import CarWBS from './components/page/koscar/temaInfo/CarWBS';
import CarDB from './components/page/koscar/temaInfo/CarDB';
import CarJoin from './components/page/koscar/temaInfo/CarJoin';
import Carlog from './components/page/koscar/temaInfo/Carlog';
import CarFind from './components/page/koscar/temaInfo/CarFind';
import CarProfile from './components/page/koscar/temaInfo/CarProfile';
import CarSell from './components/page/koscar/temaInfo/CarSell';
import CarMain from './components/page/koscar/temaInfo/CarMain';
import CarDetail from './components/page/koscar/temaInfo/CarDetail';
import CarEdit from './components/page/koscar/temaInfo/CarEdit';

const App = () => {

  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
          {/* 기본 레이아웃 */}
          <Route path='/' element={<Layout/>}>
            <Route index element={<Intro/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/team' element={<TeamToast/>}/>
            <Route path='/car' element={<KosCar/>}/>
          </Route>

          {/* TeamToast 레이아웃 */}
          <Route path='/lay' element={<TeamLayout/>}>
            <Route path='teamWBS' element={<TeamWBS/>}/>
            <Route path='teamDB' element={<TeamDB/>}/>
            <Route path='teamlog' element={<Teamlog/>}/>
            <Route path='teamjoin' element={<TeamJoin/>}/>
            <Route path='teamfind' element={<TeamFind/>}/>
            <Route path='teamprofile' element={<TeamProfile/>}/>
            <Route path='teamspace' element={<TeamSpace/>}/>
            <Route path='teamproject' element={<TeamProject/>}/>
            <Route path='teamlist' element={<TeamList/>}/>
            <Route path='sprint' element={<ActiveSprint/>}/>
            <Route path='dash' element={<DashBoard/>}/>
            <Route path='back' element={<BackLog/>}/>
            <Route path='issue' element={<IssueList/>}/>
            <Route path='time' element={<TimeLine/>}/>
          </Route>
          
        {/* KOSCAR 레이아웃 */}
        <Route path='/carlay' element={<KosCarLayout/>}>
          <Route path='carWBS' element={<CarWBS/>}/>
          <Route path='carDB' element={<CarDB/>}/>
          <Route path='carlog' element={<Carlog/>}/>
          <Route path='carjoin' element={<CarJoin/>}/>
          <Route path='carfind' element={<CarFind/>}/>
          <Route path='carprofile' element={<CarProfile/>}/>
          <Route path='carsell' element={<CarSell/>}/>
          <Route path='carmain' element={<CarMain/>}/>
          <Route path='cardetail' element={<CarDetail/>}/>
          <Route path='caredit' element={<CarEdit/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
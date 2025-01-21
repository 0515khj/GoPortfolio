import React from 'react';
import Intro from './components/page/intro/Intro';
import {HashRouter as Router,Route,Routes} from 'react-router-dom'
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
import CarWBS from './components/page/koscar/carInfo/CarWBS';
import CarDB from './components/page/koscar/carInfo/CarDB';
import CarJoin from './components/page/koscar/carInfo/CarJoin';
import Carlog from './components/page/koscar/carInfo/Carlog';
import CarFind from './components/page/koscar/carInfo/CarFind';
import CarProfile from './components/page/koscar/carInfo/CarProfile';
import CarSell from './components/page/koscar/carInfo/CarSell';
import CarMain from './components/page/koscar/carInfo/CarMain';
import CarDetail from './components/page/koscar/carInfo/CarDetail';
import CarEdit from './components/page/koscar/carInfo/CarEdit';
import Sudden from './components/page/sudden/Sudden';
import SuddenInfo from './components/page/sudden/suddenInfo/SuddenInfo';
import SuddenLayout from './components/SuddenLayout';
import SuddenClan from './components/page/sudden/suddenInfo/SuddenClan';
import Suddenlog from './components/page/sudden/suddenInfo/Suddenlog';
import SuddenJoin from './components/page/sudden/suddenInfo/SuddenJoin';
import SuddenMarket from './components/page/sudden/suddenInfo/SuddenMarket';
import SuddenNotice from './components/page/sudden/suddenInfo/SuddenNotice';
import SuddenCustomer from './components/page/sudden/suddenInfo/SuddenCustomer';
import SuddenCart from './components/page/sudden/suddenInfo/SuddenCart';
import MyrealLayout from './components/MyrealLayout';
import MyrealTrip from './components/page/myreal/MyrealTrip';

const App = () => {

  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
          {/* 기본 레이아웃 */}
          <Route path='/' element={<Layout/>}>
            <Route index element={<Intro/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/team' element={<TeamToast/>}/>
            <Route path='/car' element={<KosCar/>}/>
            <Route path='/sudden' element={<Sudden/>}/>
            <Route path='/myreal' element={<MyrealTrip/>}/>
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

        {/* Sudden 레이아웃 */}
        <Route path='/suddenlay' element={<SuddenLayout/>}>
          {/* <Route path='info' element={<SuddenInfo/>}/>
          <Route path='clan' element={<SuddenClan/>}/>
          <Route path='suddenlog' element={<Suddenlog/>}/>
          <Route path='suddenjoin' element={<SuddenJoin/>}/>
          <Route path='market' element={<SuddenMarket/>}/>
          <Route path='notice' element={<SuddenNotice/>}/>
          <Route path='customer' element={<SuddenCustomer/>}/>
          <Route path='cart' element={<SuddenCart/>}/> */}
        </Route>

        {/* MyrealTrip 레이아웃 */}
        <Route path='/mylay' element={<MyrealLayout/>}>
          {/* <Route path='customer' element={<SuddenCustomer/>}/> */}
          
        </Route>

      </Routes>
    </Router>
    </>
  );
};

export default App;
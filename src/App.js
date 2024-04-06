import './App.css';
import NavBar from './components/NavBar';
import SubHeader from './components/Subheader';
import MainContent from './components/MainContent';
import FeedBack from './components/FeedBack';
import GettingStarted from './components/GettingStarted';

function App() {
  return (
   <div className='flex flex-col items-center relative font-Poppins'>
    <NavBar/>
    <SubHeader/>
    <MainContent/>
    <FeedBack/>
    <GettingStarted/>
   </div>
  );
}

export default App;

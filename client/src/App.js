import {DashboardDataProvider} from './context/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './screens/dashboard/Dashboard';
import Header from './components/navbar/Header';
import Sidebar from './components/navbar/Sidebar';
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Message from './components/messages/Message';
import './App.css';
import PostingDetail from './components/posting/PostingDetail';
import AllCandidates from './components/all_candidates/AllCandidates';

function App() {
  return (
    <div>
      <DashboardDataProvider>
      <Router>
              <div className='header_sidebar'>
                <Header />
              </div>
              <div className='components'>
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/job" element={<Jobs />} />
                  <Route path="/posting" element={<PostingDetail />} />
                  <Route path="/posting/all" element={<AllCandidates/>} />
                  <Route path="/messages" element={<Message />} />
                </Routes>
              </div>
            </Router>
      </DashboardDataProvider>
    </div>
  );
}

export default App;

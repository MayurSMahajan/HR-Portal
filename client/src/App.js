import { DashboardDataProvider, MessageDataProvider, UserDataProvider } from './context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './screens/dashboard/Dashboard';
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Message from './components/messages/Message';
import './App.css';
import PostingDetail from './components/posting/PostingDetail';
import AllCandidates from './components/all_candidates/AllCandidates';
import Auth from './layout/Auth';
import Main from './layout/Main';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <>
      <Router>
        <UserDataProvider>
          <DashboardDataProvider>
            <MessageDataProvider>

              <Routes>
                <Route path="/login" element={<Auth Component={Login} />} />
                <Route path="/posting" element={<PostingDetail />} />
                <Route path="/posting/all" element={<AllCandidates />} />
                <Route path="/register" element={<Auth Component={Register} />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/home" element={<Main Component={Home} />} />
                <Route path="/job" element={<Main Component={Jobs} />} />
                <Route path="/messages" element={<Main Component={Message} />} />
              </Routes>
            </MessageDataProvider>
          </DashboardDataProvider>
        </UserDataProvider>
      </Router>
    </ >
  );
}

export default App;

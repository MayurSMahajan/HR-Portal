import { DashboardDataProvider, MessageDataProvider, UserDataProvider } from './context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './screens/dashboard/Dashboard';
import Home from './components/home/Home';
import Message from './components/messages/Message';
import './App.css';
import PostingDetail from './screens/posting/PostingDetail';
import AddPosting from './screens/add_posting/AddPosting';
import AllCandidates from './screens/all_candidates/AllCandidates';
import Auth from './layout/Auth';
import Main from './layout/Main';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Explore from './components/explore/Explore';

function App() {
  return (
    <>
      <UserDataProvider>
        <DashboardDataProvider>
          <MessageDataProvider>

            <Router>
              <Routes>
                <Route path="/login" element={<Auth Component={Login} />} />
                <Route path="/posting" element={<PostingDetail />} />
                <Route path="/posting/all" element={<AllCandidates />} />
                <Route path="/posting/add" element={<AddPosting />} />
                <Route path="/register" element={<Auth Component={Register} />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/home" element={<Main Component={Home} />} />
                <Route path="/explore" element={<Main Component={Explore} />} />
                <Route path="/messages" element={<Main Component={Message} />} />
              </Routes>
            </Router>
          </MessageDataProvider>
        </DashboardDataProvider>
      </UserDataProvider>
    </ >
  );
}

export default App;

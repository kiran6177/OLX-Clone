import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignupPage from './Pages/SignupPage';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import CreatePost from './Pages/CreatePost';
import DetailPost from './Pages/DetailPost';
import PostsCont from './store/PostContext';
import AuthCheck from './AuthCheck';

function App() {
  return (
      <div>
        <PostsCont>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/signup' element={<SignupPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/createpost' element={
              <AuthCheck>
                <CreatePost/>
              </AuthCheck>
              }/>
              <Route path='/postdetail' element={<DetailPost/>}/>
            </Routes>
          </BrowserRouter>
      </PostsCont>
      </div>
  );
}

export default App;

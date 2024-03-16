import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './config/router';
import {Home, Browse, SignIn, SignUp, Profile, Unauthorized, Story, Search, NotAllowed, About, Contact} from './pages';
import useAuth, {AuthProvider} from './helpers/useAuth';
import {  Protected, UserRedirect, RequireAuth } from './helpers/routes';
import Loading from "./containers/loading"
//import {HeaderContainer} from './containers/header';


function RouteSite() {

  const {isLogin,loading,loadInit} = useAuth();

  return (
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<UserRedirect isLogin={isLogin} loggedInPath={ROUTES.BROWSE}><SignIn/></UserRedirect>}/>
        <Route path={ROUTES.SIGN_UP} element={<UserRedirect isLogin={isLogin} loggedInPath={ROUTES.BROWSE}><SignUp/></UserRedirect>}/>
        <Route path={ROUTES.BROWSE} element={<Protected isLogin={isLogin}><Browse/></Protected>}/>
        {/* <Route path={ROUTES.BROWSE} element={<Browse/>}/> */}
        <Route element={<RequireAuth isLogin={isLogin} loading={loading} loadInit={loadInit}/>}>
          <Route path="/profile">
            <Route path=":userid" element={<Profile/>}/>
            <Route path="me" />
          </Route>
        
          <Route path="/story">
              <Route path=":storyid" element={<Story/>}>
                <Route path="chapter">
                  <Route path=":chapterid"/>
                </Route>
              </Route>
          </Route>

          <Route path="/search" element={<Search/>}/>
        </Route>
        <Route path={ROUTES.CONTACT} element={<Contact/>}></Route>
        <Route path={ROUTES.ABOUT} element={<About/>}/>
        <Route path={ROUTES.HOME} element={<UserRedirect isLogin={isLogin} loggedInPath={ROUTES.BROWSE}><Home/></UserRedirect>}/>
        <Route path="/unauthorized" element={<NotAllowed/>}></Route>
      </Routes>
  )
}

function App() {
  
  return (
    <Router>
      <AuthProvider>
        <RouteSite/>
      </AuthProvider>
      </Router>
    
  );
}



export default App;


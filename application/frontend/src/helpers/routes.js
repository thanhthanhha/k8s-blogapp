import React,{useEffect} from 'react';
import { Route, Navigate, useLocation, Outlet} from 'react-router-dom';
import useAuth from './useAuth';
import Loading from '../containers/loading';


export function UserRedirect({ isLogin, loggedInPath, children, ...rest }) {


  if (!isLogin) {
     return children;
   }

  console.log(loggedInPath);

   if (isLogin) {
    return (
      <Navigate
        to={{
          pathname: loggedInPath,
        }}
      />
    );
   }

   return null;
}

export function Protected({ isLogin, children, ...rest }) {
        const location = useLocation();

        if (isLogin) {
          return children;
        }

        if (!isLogin) {
          return (
            <Navigate
              to={{
                pathname: '/signin'
              }}
            />
          );
        }
}

export const RequireAuth = ({isLogin,loading,loadInit,children,...rest}) => {
  const location = useLocation();


  if ((loading || !loadInit) && !isLogin) {
    return (
      <Loading/>
    )
  }

  if(isLogin) {
    return <Outlet />;
  }

  if (!isLogin && loadInit) {
    return (
      <Navigate
        to={{ pathname: "/unauthorized", state: { from: location } }}
        replace
      />
    );
  }

  return <Loading/>;
};

import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from '../../services/hooks/reduxHooks';

interface IProtectedRouteElement {
  element: React.ReactElement;
}

const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ element: Component }) => {
  // @ts-ignore
  // TODO
  const { isLoggedIn } = useSelector((store) => store.currentUser);
  return isLoggedIn ? Component : <Navigate to="/signin" />;
};

export default ProtectedRouteElement;

import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicRoutes from './PublicRoutes/PublicRoutes';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import {AuthContext} from '../Context/Auth';

function Routes() {
  const {authToken} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authToken ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}

export default Routes;

import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext('test');

function AuthProvider({children}) {
  const [authToken, setAuthToken] = useState(false);
  React.useEffect(() => {
    setAuthToken(true);
  }, []);
  return (
    <AuthContext.Provider value={{authToken}}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthProvider;

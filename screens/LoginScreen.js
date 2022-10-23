import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setisAnthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }){
    setisAnthenticating(true);
    try{
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error){
      Alert.alert(
        'Problemas no login.',
        'Cheque o e-mail e senha e tente novamente.'
      );
      setisAnthenticating(false);      
    }
  }

  if (isAuthenticating){
    return <LoadingOverlay message="Logging user..."/>
  }  

  return <AuthContent onAuthenticate={loginHandler}/>;
}

export default LoginScreen;

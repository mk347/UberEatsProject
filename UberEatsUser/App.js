import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import BasketContextProvider from './src/contexts/BasketContext';

Amplify.configure({
  ...config, 
  Analytics: {
    disabled: true
  },
})

// All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
function App() {
  return (
    <NavigationContainer>
        <AuthContextProvider>
          <BasketContextProvider>
            <RootNavigator />
          </BasketContextProvider>
        </AuthContextProvider>
        <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'

Amplify.configure(config)

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator />

        <StatusBar style="light" />
    </NavigationContainer>
  );
}
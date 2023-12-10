import { Platform, SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import LogerScreen from './app/screens/LogerScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import Task from './app/screens/Task';
import AllTasks from './app/screens/AllTasks';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Loger" component={LogerScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Tasks" component={AllTasks}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
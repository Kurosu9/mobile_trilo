import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import LogerScreen from './app/screens/LogerScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AllTasks from './app/screens/AllTasks';
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function App() {
  const {user} = useAuth();
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AllTasks">
          <Stack.Screen name="AllTasks" component={AllTasks} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loger">
          <Stack.Screen name="Loger" component={LogerScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
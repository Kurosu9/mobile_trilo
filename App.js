import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import LogerScreen from "./app/screens/LogerScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AllTasks from "./app/screens/AllTasks";
import Board from "./app/screens/Board";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loger" component={LogerScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Tasks" component={AllTasks} />
        <Stack.Screen name="Boards" component={Board} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

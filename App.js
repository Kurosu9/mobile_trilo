import { Platform, SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native";
import MaterilaIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import IonIcons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Date of Birth");
  const auth = FIREBASE_AUTH;


export default function RegisterScreen( {navigation} ) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [date, setDate] = useState(new Date);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Date of Birth');
    const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      if (password.length < 8) {
        alert("Password should be at least 8 characters long!");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      Alert.alert("Trilo", "Registration failed: " + error.message);
    } finally {
      navigation.navigate("Boards");
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    // let fTime = 'Hours: ' + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    setText(fDate); //+ "\n" + fTime for time

    // console.log(fDate); //+ " (" + fTime + ") "
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View>
            <Image
              style={{ width: 400, height: 400 }}
              source={require("../assets/images/signup.png")}
            />
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("Loger")}>
              <AntDesign style={{ fontSize: 25 }} name="arrowleft" />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Sign up</Text>

          <View
            style={{
              flexDirection: "row",
              width: 300,
              justifyContent: "space-between",
              marginBottom: 30,
            }}>
            <TouchableOpacity style={styles.img} onPress={() => {}}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/images/google.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.img} onPress={() => {}}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/images/microsoft.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.img} onPress={() => {}}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/images/apple.png")}
              />
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 15, color: "#666", marginBottom: 30 }}>
            Or, register with...{" "}
          </Text>

          <View style={styles.register}>
            <FontAwesome5
              style={styles.icon}
              name="user"
              size={20}
              color="black"
            />
            <TextInput
              placeholder="Full Name"
              style={{ flex: 1, paddingVertical: 0, fontSize: 18 }}
            />
          </View>
          <View style={styles.register}>
            <MaterilaIcons
              style={styles.icon}
              name="alternate-email"
              size={20}
              color="black"
            />
            <TextInput
              style={{ flex: 1, paddingVertical: 0, fontSize: 18 }}
              value={email}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.register}>
            <FontAwesome5
              style={styles.icon}
              name="lock"
              size={20}
              color="black"
            />
            <TextInput
              style={{ flex: 1, paddingVertical: 0, fontSize: 18 }}
              value={password}
              secureTextEntry={!showPassword}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={text => setPassword(text)}
            />
            <IonIcons
              name={showPassword ? "eye-off" : "eye"}
              style={{ fontSize: 24, marginRight: 5 }}
              onPress={toggleShowPassword}
            />
          </View>
          <View style={styles.register}>
            <FontAwesome5
              style={styles.icon}
              name="lock"
              size={20}
              color="black"
            />
            <TextInput
              style={{ flex: 1, paddingVertical: 0, fontSize: 18 }}
              value={confirmPassword}
              secureTextEntry={!showPassword}
              placeholder="Confirm password"
              autoCapitalize="none"
              onChangeText={text => setConfirmPassword(text)}
            />
            <IonIcons
              name={showPassword ? "eye-off" : "eye"}
              style={{ fontSize: 24, marginRight: 5 }}
              onPress={toggleShowPassword}
            />
          </View>
          <View style={styles.register}>
            <IonIcons
              style={styles.icon}
              name="calendar"
              size={23}
              color="black"
            />
            <TouchableOpacity onPress={() => showMode("date")}>
              <Text style={{ fontSize: 18, color: "#757575", marginTop: 5 }}>
                {text}
              </Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                // is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <TouchableOpacity onPress={signUp}>
              <Text style={styles.btn}>Sign up</Text>
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold" }}>
              Already sign up?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 15,
                  color: "#FABDF5",
                  fontWeight: "bold",
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  register: {
    width: 330,
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 25,
    fontSize: 35,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 8,
    marginTop: 5,
  },
  back: {
    marginTop: 40,
    marginLeft: 20,
    position: "absolute",
  },
  btn: {
    width: 150,
    padding: 14,
    backgroundColor: "#FFC0CB",
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  forgot: {
    fontSize: 15,
    borderBottomWidth: 2,
    borderColor: "#666",
    paddingBottom: 1,
    marginBottom: 35,
    color: "#666",
  },
  img: {
    flexDirection: "row",
    justifyContent: "center",
    width: 60,
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

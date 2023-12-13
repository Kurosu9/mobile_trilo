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
} from "react-native";
import MaterilaIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import IonIcons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";

export default function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Date of Birth");

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [passwordConfirm, setPasswordConfirm] = useState("");
  //   const [fullname, setFullname] = useState("");
  //   const [birthday, setBirthday] = useState("");

  //   const API = "http://localhost:8000/users";

  //   const addUser = async formData => {
  //     await axios.post(API, formData);
  //   };

  //   function createUser() {
  //     if (
  //       !email.trim() ||
  //       !password.trim() ||
  //       !passwordConfirm.trim() ||
  //       !fullname.trim() ||
  //       !text.trim()
  //     ) {
  //       alert("Some inputs are empty!");
  //       return;
  //     }
  //     let formData = new FormData();
  //     formData.append("email", email);
  //     formData.append("password", password);
  //     // formData.append("password_confirm", passwordConfirm);
  //     formData.append("fullname", fullname);
  //     formData.append("birthday", text);

  //     addUser(formData);
  //     navigation.navigate("Tasks");
  //   }

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
              //   value={fullname}
              //   onChangeText={text => setFullname(text)}
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
              placeholder="Email"
              //   value={email}
              //   onChangeText={text => setEmail(text)}
              style={{ flex: 1, paddingVertical: 0, fontSize: 18 }}
              keyboardType="email-address"
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
              secureTextEntry={!showPassword}
              //   value={password}
              //   onChangeText={text => setPassword(text)}
              placeholder="Password"
              style={{ flex: 1, paddingVertical: 0, fontSize: 18 }}
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
              secureTextEntry={!showPassword}
              placeholder="Confirm Password"
              //   value={passwordConfirm}
              //   onChangeText={text => setPasswordConfirm(text)}
              style={{ flex: 1, paddingVertical: 0, fontSize: 18 }}
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
                // onChangeText={text => setDate(text)}
                mode={mode}
                // is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}
          </View>
          {/* createUser(email, password, passwordConfirm, date, fullname) */}
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.btn}>Sign up</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold" }}>
              Already have an account?
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
    backgroundColor: "#eec0c8",
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

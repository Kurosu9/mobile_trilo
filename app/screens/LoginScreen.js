import React, { useState, useContext } from "react";
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
} from "react-native";
import MaterilaIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import IonIcons from "react-native-vector-icons/Ionicons";
// import axios from "axios";
// import { authContext } from "../context/authContext";

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //   const handleLogin = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/users"); // Update the path
  //       const users = response.data.users;

  //       const user = users.find(
  //         u => u.email === email && u.password === password
  //       );

  //       if (user) {
  //         Alert.alert("Login Successful");
  //         navigation.navigate("Tasks");
  //       } else {
  //         Alert.alert("Invalid credentials");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data", error);
  //     }
  //   };

  //   async function login(email, password) {
  //     // fetch("http://localhost:8000/users")
  //     //   .then(res => res.json())
  //     //   .then(data => {
  //     //     data.map(item => {
  //     //       if (item.email == email && item.password == password) {
  //     //         localStorage.setItem("email", email);
  //     //         localStorage.setItem("password", password);
  //     //         navigation.navigate("Tasks");
  //     //       } else {
  //     //         alert("invalid username or password");
  //     //       }
  //     //     });
  //     //   });
  //     try {
  //       const usersJson = await AsyncStorage.getItem("users");
  //       const users = JSON.parse(usersJson);

  //       const user = users.find(
  //         u => u.email === email && u.password === password
  //       );

  //       if (user) {
  //         // Login successful, navigate to the next screen (replace with your actual navigation logic)
  //         navigation.navigate("Home");
  //       } else {
  //         // Login failed
  //         alert("Invalid credentials");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   }

  //   function loginUser() {
  //     if (!email.trim() || !password.trim()) {
  //       alert("Some inputs are empty!");
  //       return;
  //     }

  //     login(email, password);

  //     setEmail("");
  //     setPassword("");
  //   }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View>
            <Image
              style={{ height: 400, width: 400 }}
              source={require("../assets/images/login.png")}
            />
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("Loger")}>
              <AntDesign style={{ fontSize: 25 }} name="arrowleft" />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Login</Text>
          <View style={styles.login}>
            <MaterilaIcons
              style={styles.icon}
              name="alternate-email"
              size={20}
              color="black"
            />
            <TextInput
              placeholder="Email"
              style={{ flex: 1, paddingVertical: 0, fontSize: 18 }}
              //   value={email}
              //   onPress={() => setEmail(e.target.value)}
              //   onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.login}>
            <FontAwesome5
              style={styles.icon}
              name="lock"
              size={20}
              color="black"
            />
            <TextInput
              secureTextEntry={!showPassword}
              placeholder="Password"
              //   value={password}
              //   onChangeText={(text) => setPassword(text)}
              style={{ flex: 1, paddingVertical: 0, fontSize: 18 }}
            />
            <IonIcons
              name={showPassword ? "eye-off" : "eye"}
              style={{ fontSize: 24, marginRight: 5 }}
              onPress={toggleShowPassword}
            />
          </View>
          {/* onPress={() => navigation.navigate("Tasks")} */}
          <TouchableOpacity>
            {" "}
            {/* onPress={handleLogin} */}
            <Text style={styles.btn}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgot}>Forgot the password</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 15, color: "#666", marginBottom: 15 }}>
            Or, login with...{" "}
          </Text>

          <TouchableOpacity style={styles.img} onPress={() => {}}>
            <Image
              style={{ height: 35, width: 35 }}
              source={require("../assets/images/google.png")}
            />
            <Text style={{ fontSize: 22, marginLeft: 10 }}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.img} onPress={() => {}}>
            <Image
              style={{ height: 35, width: 35 }}
              source={require("../assets/images/microsoft.png")}
            />
            <Text style={{ fontSize: 22, marginLeft: 10 }}>Microsoft</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.img} onPress={() => {}}>
            <Image
              style={{ height: 35, width: 35 }}
              source={require("../assets/images/apple.png")}
            />
            <Text style={{ fontSize: 22, marginLeft: 10 }}>Apple</Text>
          </TouchableOpacity>
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
    paddingBottom: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  login: {
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
    width: 350,
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Button,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import BoardComponent from "./BoardComponent";

export default function Board({ navigation }) {
  const [board, setBoard] = useState();
  const [boardItems, setBoardItems] = useState([]);

  const handleAddBoard = () => {
    Keyboard.dismiss();
    setBoardItems([...boardItems, board]);
    setBoard(null);
  };

  // const completeBoard = index => {
  //   let itemsCopy = [...boardItems];
  //   itemsCopy.splice(index, 1);
  //   setBoardItems(itemsCopy);
  // };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("Loger")}>
        
      </TouchableOpacity> */}

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.boardsWrapper}>
          <View style={styles.titlelogout}>
            <Text style={styles.sectionTitle}>Boards</Text>
            <Text style={styles.btnLogout}>LOGOUT</Text>
          </View>

          <View style={styles.items}>
            {boardItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}

                  // onPress={() => completeBoard(index)}
                >
                  <BoardComponent text={item} index={index} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeBoardWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write the board name"}
          value={board}
          onChangeText={text => setBoard(text)}
        />
        <TouchableOpacity onPress={() => handleAddBoard()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  boardsWrapper: {
    paddingTop: 80,

    paddingHorizontal: 20,
  },
  back: {
    marginTop: 40,
    marginLeft: 20,
    position: "absolute",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#89666c",
  },
  titlelogout: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },
  items: {
    marginTop: 30,
  },
  writeBoardWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnLogout: {
    alignContent: "center",
    backgroundColor: "rgb(146, 7, 7)",
    padding: 6,
    // borderWidth: 2,
    color: "white",
    fontWeight: "800",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#eec0c8",
    // color: "#eec0c8",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#eec0c8",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
  addText: {
    color: "#fff",
    fontSize: 24,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});

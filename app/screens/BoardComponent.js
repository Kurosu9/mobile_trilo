import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BoardComponent = props => {
  const [boardItems, setBoardItems] = useState([]);

  const deleteBoard = index => {
    let itemsCopy = [...boardItems];
    itemsCopy.splice(index, 1);
    setBoardItems(itemsCopy);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text
          // onPress={() => navigation.navigate("Tasks")}
          style={styles.itemText}>
          {props.text}
        </Text>
      </View>
      <View
        onPress={() => deleteBoard(props.index)}
        style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 60,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#eec0c8",
    borderWidth: 2,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  itemText: {
    maxWidth: "100%",
    fontSize: 20,
    fontWeight: "700",
    color: "#89666c",
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default BoardComponent;

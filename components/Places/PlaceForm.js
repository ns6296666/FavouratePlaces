import React, { useState } from "react";
import { ScrollView, TextInput, View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const changeHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    marginVertical: 4,
    fontWeight: "bold",
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});

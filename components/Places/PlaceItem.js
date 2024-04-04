import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function PlaceItem({ item, onSelect }) {
  console.log("==========", item);
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={() => onSelect(item.id)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}> {item.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: { opacity: 0.9 },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: { flex: 2, padding: 12 },
  title: { color: Colors.gray700, fontWeight: "bold", fontSize: 18 },
  address: { color: Colors.gray700, fontSize: 12 },
});

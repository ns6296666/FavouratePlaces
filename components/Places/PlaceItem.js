import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function PlaceItem({ item, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <View>
        <Image source={{ uri: item.image }} />
        <View>
          <Text>Title:{item.title}</Text>
          <Text>Address: {item.address}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  title: { color: "#fff" },
});

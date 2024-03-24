import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../constants/colors";

export default function PlacesList({ places }) {
  if (!places || places.length === 0 || places === undefined) {
    <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>
        No Places yet - start adding some!
      </Text>
    </View>;
  }
  return (
    <View>
      <FlatList
        data={places}
        key={(item) => item.id}
        renderItem={({ item }) => <PlaceItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});

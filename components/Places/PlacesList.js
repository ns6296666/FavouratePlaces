import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {
  if (!places || places == null) {
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
  },
});

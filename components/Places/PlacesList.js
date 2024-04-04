import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../constants/colors";

export default function PlacesList({ places }) {
  const navigation = useNavigation();
  const DetailScreenHandler = (id) => {
    navigation.navigate("PlaceDetails", { placeId: id });
  };
  console.log("PlacesList", places);
  if (!places || places.length === 0 || places === undefined) {
    <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>
        No Places yet - start adding some!
      </Text>
    </View>;
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={places}
        style={styles.list}
        key={(item) => item.id}
        renderItem={({ item }) => (
          <PlaceItem item={item} onSelect={DetailScreenHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 40,
  },
  list: { margin: 24 },
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

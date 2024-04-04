import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../components/constants/colors";
import { fetchPlaceDetails } from "../components/utils/database";

function PlaceDetails({ route, navigation }) {
  const selectedPlaceId = route.params.placeId;
  const [places, setPlaces] = useState();
  useEffect(() => {
    async function fetchingDetails() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setPlaces(place);
      navigation.setOptions({
        title: place.title,
      });
    }
    fetchingDetails();
  }, [selectedPlaceId]);

  const MapHandler = () => {};

  if (!places) {
    return (
      <View style={styles.fallBack}>
        <Text>Loading place data...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: places.imageUri }} />
      <View>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{places.address}</Text>
        </View>
        <OutlinedButton name="map" onPress={MapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;
const styles = StyleSheet.create({
  fallBack: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { height: "35%", minHeight: 300, width: "100%" },
  locationContainer: { justifyContent: "center", alignItems: "center" },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    ></MapView>
  );
}

export default Map;
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

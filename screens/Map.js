import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState();
  const regionChange = (region) => {
    const lat = region.nativeEvent.coordinate.latitude;
    const lng = region.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
    console.log(
      "region",
      region.nativeEvent.coordinate.latitude,
      region.nativeEvent.coordinate.longitude
    );
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onPress={regionChange}
    >
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
          title="Picked Location"
        />
      )}
    </MapView>
  );
}

export default Map;
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

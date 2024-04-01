import React, { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();
  const regionChange = (region) => {
    const lat = region.nativeEvent.coordinate.latitude;
    const lng = region.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  };

  const savedPickedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked",
        "You have to pick location by tapping map first"
      );
      return;
    }
    navigation.navigate("AddPlace", { selectedLocation });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          name="save"
          size={24}
          tintColor={tintColor}
          onPress={savedPickedLocation}
        />
      ),
    });
  }, [navigation, savedPickedLocation]);

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

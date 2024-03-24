import { Alert, Button, Image, StyleSheet, View, Text } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../constants/colors";

export default function ImagePicker() {
  const [imageObj, setImageObj] = useState({});
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermission = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const PermissionResponse = await requestPermission();
      return PermissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant permission to use this app."
      );
      return false;
    }
    return true;
  };

  const ImagePickerHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImageObj(image.assets[0].uri);
  };

  let imagePreview = <Text>No image taken yet!</Text>;

  if (imageObj) {
    imagePreview = <Image source={{ uri: imageObj }} style={styles.image} />;
  }

  return (
    <View>
      <View>
        <View style={styles.imagePreview}>{imagePreview}</View>
      </View>
      <Button title="Take Picture" onPress={ImagePickerHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

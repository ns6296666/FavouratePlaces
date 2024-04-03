import React from "react";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../components/utils/database";

export default function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

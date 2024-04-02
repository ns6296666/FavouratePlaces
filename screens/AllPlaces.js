import React, { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused, useRoute } from "@react-navigation/native";

function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const route = useRoute();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((prevPlaces) => [...prevPlaces, route?.params?.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}
export default AllPlaces;

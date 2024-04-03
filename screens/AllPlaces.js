import React, { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { fetchPlaces } from "../components/utils/database";

function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const route = useRoute();
  const isFocused = useIsFocused();
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}
export default AllPlaces;

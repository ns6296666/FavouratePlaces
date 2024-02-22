import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconButton({ name, size, color }) {
  return <Ionicons name={name} size={size} color={color} />;
}

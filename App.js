import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={{
              headerRight: () => (
                <IconButton name="add" size={24} color="black" />
              ),
            }}
          />
          <Stack.Screen name="AddPlace" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

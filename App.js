import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./components/constants/colors";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              headerBackTitleVisible: false,
              headerBackTitle: "Back",
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  name="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlace} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

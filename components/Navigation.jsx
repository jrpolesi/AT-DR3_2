import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GalleryScreen } from "../screens/GalleryScreen.jsx";
import { ImageDetailsScreen } from "../screens/ImageDetailsScreen.jsx";

const stackNavigator = createStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <stackNavigator.Navigator>
        <stackNavigator.Screen
          name="Gallery"
          options={{
            title: "Galeria",
          }}
          component={GalleryScreen}
        />
        <stackNavigator.Screen
          name="ImageDetails"
          options={{
            title: "Detalhes",
          }}
          component={ImageDetailsScreen}
        />
      </stackNavigator.Navigator>
    </NavigationContainer>
  );
}

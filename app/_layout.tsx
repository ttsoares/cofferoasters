import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { View } from "react-native";

import Navigation from "@/components/Navigation";

import "./global.css";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    Fraunces: require("../assets/fonts/Fraunces.ttf"),
    BarlowBold: require("../assets/fonts/BarlowBold.ttf"),
    BarlowRegular: require("../assets/fonts/BarlowRegular.ttf"),
  });

  if (!fontsLoaded) {
    return <View />; // or your splash screen
  }

  return (
    <View className="flex-1 bg-white">
      <Navigation />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}

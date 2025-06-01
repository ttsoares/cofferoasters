import Navigation from "@/components/Navigation";
import { ImageBackground, SafeAreaView, ScrollView, useWindowDimensions } from "react-native";

// import MyButton from "@/components/MyButton";
import MyText from "@/components/MyText";


export default function Index() {

  const { width } = useWindowDimensions();

  // Define heights for each breakpoint
  const heroHeight =
    width >= 1440 ? 800 :
      width >= 768 ? 600 :
        500;

  const imageSource =
    width >= 1440
      ? require("../assets/images/home/desktop/image-hero-coffeepress.jpg")
      : width >= 768
        ? require("../assets/images/home/tablet/image-hero-coffeepress.jpg")
        : require("../assets/images/home/mobile/image-hero-coffeepress.jpg");


  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex">
        <Navigation />
        <ImageBackground
          source={imageSource}
          className={`w-full h-[${heroHeight}px] bg-cover bg-center`}>
          <MyText className="text-size72 font-black text-white text-center mt-20">Great coffe made simple.</MyText>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

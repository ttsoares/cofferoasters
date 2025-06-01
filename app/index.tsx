import { SafeAreaView, ScrollView } from "react-native";

import Footer from "@/components/Footer";
import Collection from "@/components/home/Collection";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Whychooseus from "@/components/home/whychooseus";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
        className="bg-white flex-1"
      >
        <Hero />
        <Collection />
        <Whychooseus />
        <HowItWorks />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

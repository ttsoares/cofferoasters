import { SafeAreaView, ScrollView } from "react-native";

import Footer from "@/components/Footer";
import Hero from "@/components/yourplan/Hero";
import HowItWorks from "@/components/yourplan/HowItWorks";
import Plans from "@/components/yourplan/Plans";


export default function YourPlan() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
        className="bg-white flex-1"
      >
        <Hero />
        <HowItWorks />
        <Plans />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

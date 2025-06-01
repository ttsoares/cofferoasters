import { SafeAreaView, ScrollView } from "react-native";

import HeadQuarters from "@/components/about/HeadQuarters";
import Hero from "@/components/about/Hero";
import OurCommitment from "@/components/about/OurCommitment";
import Quality from "@/components/about/Quality";
import Footer from "@/components/Footer";


export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
        className="bg-white flex-1"
      >
        <Hero />
        <OurCommitment />
        <Quality />
        <HeadQuarters />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

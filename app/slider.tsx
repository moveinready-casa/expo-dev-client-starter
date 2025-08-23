import { Slider } from "@/components/ui/slider";
import React from "react";
import { View } from "react-native";

export default function SliderPage() {
  return (
    <View className="m-4">
      <Slider defaultValue={[33]} max={100} step={1} />
    </View>
  );
}

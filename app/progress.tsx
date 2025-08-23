import { Progress } from "@/components/ui/progress";
import React from "react";
import { View } from "react-native";

export default function ProgressPage() {
  return (
    <View className="m-4 h-full w-full">
      <Progress value={50} />
    </View>
  );
}

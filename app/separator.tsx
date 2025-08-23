import { Separator } from "@/components/ui/separator";
import React from "react";
import { Text, View } from "react-native";

export default function SeparatorPage() {
  return (
    <View className="m-auto w-full">
      <Text>Before</Text>
      <Separator  />
      <Text>After</Text>
    </View>
  );
}

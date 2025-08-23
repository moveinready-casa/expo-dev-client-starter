import { Toggle } from "@/components/ui/toggle";
import { ItalicIcon } from "lucide-react-native";
import React from "react";
import { View } from "react-native";

export default function TogglePage() {
  return (
    <View className="m-4">
      <Toggle>
        <ItalicIcon />
      </Toggle>
    </View>
  );
}

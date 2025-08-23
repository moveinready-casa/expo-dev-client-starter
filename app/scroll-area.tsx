import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Text, View } from "react-native";

export default function ScrollAreaPage() {
  return (
    <View className="m-auto">
      <ScrollArea baseClassName="h-48 w-72">
        {Array.from({ length: 30 }).map((_, i) => (
          <View key={i} className="p-2 border-b border-border">
            <Text>Row {i + 1}</Text>
          </View>
        ))}
      </ScrollArea>
    </View>
  );
}

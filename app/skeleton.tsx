import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Text, View } from "react-native";

export default function SkeletonPage() {
  return (
    <View className="m-auto">
      <Text>Skeleton</Text>
      <Skeleton className="h-12 w-12 rounded-full" />
    </View>
  );
}

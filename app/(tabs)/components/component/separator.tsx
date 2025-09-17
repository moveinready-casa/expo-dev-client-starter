import { Separator } from "@/components/ui/separator";
import { Text, View } from "react-native";

export default function SeparatorPage() {
  return (
    <View className="m-auto w-full">
      <Text className="text-foreground m-2">Before</Text>
      <Separator />
      <Text className="text-foreground m-2">After</Text>
    </View>
  );
}

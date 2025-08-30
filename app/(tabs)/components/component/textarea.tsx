import { Textarea } from "@/components/ui/textarea";
import { View } from "react-native";

export default function TextareaPage() {
  return (
    <View className="m-4">
      <Textarea placeholder="Enter your message..." />
    </View>
  );
}

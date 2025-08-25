import { Button } from "@/components/ui/button";
import { toast, Toaster } from "@/components/ui/sonner";
import { View } from "react-native";

export default function SonnerPage() {
  return (
    <View>
      <Button onPress={() => toast.success("Hello")}>Toast!</Button>
      <Toaster />
    </View>
  );
}

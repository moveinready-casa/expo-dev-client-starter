import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { View } from "react-native";

export default function AvatarPage() {
  return (
    <View className="m-auto">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </View>
  );
}

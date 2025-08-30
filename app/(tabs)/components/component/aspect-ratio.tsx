import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Image, View } from "react-native";

export default function AspectRatioPage() {
  return (
    <View className="m-4">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
          }}
          resizeMode="cover"
          className="h-full w-full"
        />
      </AspectRatio>
    </View>
  );
}

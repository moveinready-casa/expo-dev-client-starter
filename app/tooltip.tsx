import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.web";
import { Platform, Text, View } from "react-native";

export default function TooltipPage() {
  return (
    <View className="m-auto">
      {Platform.OS === "web" ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              Add to library
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <Text className="text-foreground">
          Tooltip is not supported on mobile
        </Text>
      )}
    </View>
  );
}

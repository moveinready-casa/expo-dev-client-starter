import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { View } from "react-native";

export default function HoverCardPage() {
  return (
    <View className=" w-full h-full justify-center items-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button>Hover me (web)</Button>
        </HoverCardTrigger>
        <HoverCardContent>Hover card content goes here.</HoverCardContent>
      </HoverCard>
    </View>
  );
}

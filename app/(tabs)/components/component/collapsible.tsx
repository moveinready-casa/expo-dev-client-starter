import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Text, View } from "react-native";

export default function CollapsiblePage() {
  return (
    <View className="m-auto">
      <Collapsible>
        <CollapsibleTrigger>
          <Text className="text-foreground">Can I use this in my project?</Text>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Text className="text-foreground">
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </Text>
        </CollapsibleContent>
      </Collapsible>
    </View>
  );
}

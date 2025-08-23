import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React from "react";
import { Text, View } from "react-native";

export default function CollapsiblePage() {
  return (
    <View className="m-auto">
      <Collapsible>
        <CollapsibleTrigger>
          <Text>Can I use this in my project?</Text>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Text>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </Text>
        </CollapsibleContent>
      </Collapsible>
    </View>
  );
}

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { Text } from "react-native";

export default function RadioGroupPage() {
  return (
    <RadioGroup>
      <RadioGroupItem value="apple">
        <Text>Apple</Text>
      </RadioGroupItem>
      <RadioGroupItem value="banana">
        <Text>Banana</Text>
      </RadioGroupItem>
      <RadioGroupItem value="cherry">
        <Text>Cherry</Text>
      </RadioGroupItem>
    </RadioGroup>
  );
}

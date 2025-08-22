import Theme from "@/components/theme";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import components from "@/constants/components";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <Theme colorScheme="light">
      <ScrollView>
        {components.map((component) => (
          <Card key={component.name} className="m-2">
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </ScrollView>
    </Theme>
  );
}

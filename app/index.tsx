import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import components from "@/constants/components";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      {components.map((component) => (
        <Card key={component.name} className="m-2" asChild>
          <Link href={`/${component.name}`}>
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
          </Link>
        </Card>
      ))}
    </ScrollView>
  );
}

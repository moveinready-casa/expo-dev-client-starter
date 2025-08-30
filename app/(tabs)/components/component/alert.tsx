import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { View } from "react-native";

export default function AlertPage() {
  return (
    <View className="m-4 mt-auto mb-auto">
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </View>
  );
}

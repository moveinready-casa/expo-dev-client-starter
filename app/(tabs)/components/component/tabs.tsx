import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text, View } from "react-native";

export default function TabsPage() {
  return (
    <View className="mx-auto m-4">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Text className="text-foreground">Make changes to your account here.</Text>
        </TabsContent>
        <TabsContent value="password">
          <Text className="text-foreground">Change your password here.</Text>
        </TabsContent>
      </Tabs>
    </View>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { View } from "react-native";

export default function CardPage() {
  return (
    <View className="m-auto">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>This is the main content area of the card.</CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    </View>
  );
}

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { View } from "react-native";

export default function DrawerPage() {
  return (
    <View>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="m-4">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent snapPoints={[200, 400]} initialSnapIndex={0}>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>
              This is a description of the drawer content. You can add any
              content here.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <View className="ml-auto flex flex-row gap-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button>Save</Button>
              </DrawerClose>
            </View>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </View>
  );
}

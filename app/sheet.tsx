import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import { Text, View } from "react-native";

export default function SheetPage() {
  return (
    <View className="m-auto">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open sheet</Button>
        </SheetTrigger>
        <SheetPortal>
          <SheetOverlay />
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Share link</SheetTitle>
              <SheetDescription>
                Copy the link below to share this document.
              </SheetDescription>
            </SheetHeader>
            <View className="bg-muted my-4 rounded p-3">
              <Text selectable className="text-muted-foreground text-sm">
                https://example.com/very/long/link
              </Text>
            </View>
            <SheetFooter>
              <SheetClose asChild>
                <Button>Copy</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </View>
  );
}

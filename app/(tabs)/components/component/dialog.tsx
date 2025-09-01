import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PortalHost } from "@rn-primitives/portal";
import { Text, View } from "react-native";

export default function DialogPage() {
  return (
      <View className="p-4 h-20">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogPortal name="dialog">
            <DialogOverlay />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Copy the link below to share this document.
                </DialogDescription>
              </DialogHeader>
              <View className="bg-muted my-4 rounded p-3">
                <Text selectable>https://example.com/very/long/link</Text>
              </View>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Copy</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </View>
  );
}

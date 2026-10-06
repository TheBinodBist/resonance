"use client"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <Button variant={"default"} onClick={()=>toast.success("hello world")}>
      Click me
    </Button>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { TextInput } from "@repo/ui/text-input";

export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}>
       <TextInput size="small"placeholder="Room Name"></TextInput>
        <button onClick={() => {
          router.push("/chat/123")
        }}>Join room</button>
      </div>
    </div>
  );
}
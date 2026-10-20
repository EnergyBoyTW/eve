import type { MetadataRoute } from "next";
import { AGENT_NAME } from "@/lib/identity";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: AGENT_NAME,
    short_name: AGENT_NAME,
    description: `Chat with ${AGENT_NAME}`,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
  };
}

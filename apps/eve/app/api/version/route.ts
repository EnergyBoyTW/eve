import { version } from "@/../../package.json";

export async function GET(): Promise<Response> {
  return Response.json({ version });
}

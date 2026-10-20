export async function GET(): Promise<Response> {
  return Response.json({ status: "ok", timestamp: Date.now() });
}

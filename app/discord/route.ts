import { redirect } from "next/dist/client/components/navigation";

export const dynamic = "force-static";

export async function GET() {
  redirect("https://discord.com/invite/ez");
}

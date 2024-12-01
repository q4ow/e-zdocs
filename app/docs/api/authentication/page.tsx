import UnderConstruction from "@/components/under-construction";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Authentication | E-Z Documentation",
    description:
      "Documentation guiding you through the E-Z authentication process",
    metadataBase: new URL("https://e-z.software"),
    openGraph: {
      title: "Authentication | E-Z Documentation",
      description:
        "Documentation guiding you through the E-Z authentication process",
      images: ["/assets/e-z.svg"],
    },
  };
}

export default function Api() {
  return <UnderConstruction />;
}

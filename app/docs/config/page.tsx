import UnderConstruction from "@/components/under-construction";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Configuration | E-Z Documentation",
    description: "This page describes basics of configuration for E-Z services",
    metadataBase: new URL("https://e-z.software"),
    openGraph: {
      title: "Configuration | E-Z Documentation",
      description:
        "This page describes basics of configuration for E-Z services",
      images: ["/assets/e-z.svg"],
    },
  };
}

export default function Api() {
  return <UnderConstruction />;
}

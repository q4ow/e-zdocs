import UnderConstruction from "@/components/under-construction";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Advanced Configuration | E-Z Documentation",
    description:
      "This page describes advanced configuration options for E-Z services",
    metadataBase: new URL("https://e-z.software"),
    openGraph: {
      title: "Advanced Configuration | E-Z Documentation",
      description:
        "This page describes advanced configuration options for E-Z services",
      images: ["/assets/e-z.svg"],
    },
  };
}

export default function Api() {
  return <UnderConstruction />;
}

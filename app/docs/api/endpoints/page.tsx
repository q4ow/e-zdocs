import UnderConstruction from "@/components/under-construction";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Endpoints | E-Z Documentation',
    description: 'Documentation describing the E-Z API endpoints',
    metadataBase: new URL('https://e-z.software'),
    openGraph: {
      title: 'Endpoints | E-Z Documentation',
      description: 'Documentation describing the E-Z API endpoints',
      images: ['/assets/e-z.svg'],
    },
  };
}

export default function Api() {
    return (
      <UnderConstruction />
    );
}
import UnderConstruction from "@/components/under-construction";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Dashboard | E-Z Documentation',
    description: 'Documentation aiming to guide you through the E-Z Dashboard',
    metadataBase: new URL('https://e-z.software'),
    openGraph: {
      title: 'Dashboard | E-Z Documentation',
      description: 'Documentation aiming to guide you through the E-Z Dashboard',
      images: ['/assets/e-z.svg'],
    },
  };
}

export default function Dashboard() {
    return (
      <UnderConstruction />
    );
}
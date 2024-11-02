import UnderConstruction from "@/components/under-construction";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'API | E-Z Documentation',
    description: 'Documentation aiming to guide you through the E-Z API',
    metadataBase: new URL('https://e-z.software'),
    openGraph: {
      title: 'API | E-Z Documentation',
      description: 'Documentation aiming to guide you through the E-Z API',
      images: ['/assets/e-z.svg'],
    },
  };
}

export default function Api() {
    return (
      <UnderConstruction />
    );
}
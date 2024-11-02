import UnderConstruction from '@/components/under-construction';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Registration | E-Z Documentation',
    description: 'Documentation helping you register on E-Z.gg',
    metadataBase: new URL('https://e-z.software'),
    openGraph: {
      title: 'Registration | E-Z Documentation',
      description: 'Documentation helping you register on E-Z.gg',
      images: ['/assets/e-z.svg'],
    },
  };
}

export default function Registration() {
    return (
      <UnderConstruction />
    );
}
'use client';

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

type SoftwareApplicationJsonLdProps = {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  inLanguage?: string;
  image?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
};

export function SoftwareApplicationJsonLd({
  name,
  description,
  url,
  applicationCategory = 'GameApplication',
  operatingSystem = 'Web',
  inLanguage = 'en,it,ru',
  image,
  offers = { price: '0', priceCurrency: 'EUR' }
}: SoftwareApplicationJsonLdProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory,
    operatingSystem,
    inLanguage,
    description,
    offers: {
      '@type': 'Offer',
      price: offers.price,
      priceCurrency: offers.priceCurrency
    },
    url
  };

  if (image) {
    schema.image = image;
  }

  return <JsonLd data={schema} />;
}

type VideoObjectJsonLdProps = {
  name: string;
  description: string;
  contentUrl: string;
  embedUrl: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  inLanguage?: string;
};

export function VideoObjectJsonLd({
  name,
  description,
  contentUrl,
  embedUrl,
  thumbnailUrl,
  uploadDate,
  duration = 'PT1M',
  inLanguage = 'en'
}: VideoObjectJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    contentUrl,
    embedUrl,
    thumbnailUrl,
    uploadDate,
    duration,
    inLanguage
  };

  return <JsonLd data={schema} />;
}

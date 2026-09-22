type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type SoftwareApplicationJsonLdProps = {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  inLanguage?: string;
  image?: string;
  downloadUrl?: string;
  datePublished?: string;
  authors?: string[];
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
  downloadUrl,
  datePublished,
  authors,
  offers = { price: '0', priceCurrency: 'EUR' },
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
      priceCurrency: offers.priceCurrency,
    },
    url,
  };

  if (image) {
    schema.image = image;
  }

  if (downloadUrl) {
    schema.downloadUrl = downloadUrl;
    schema.installUrl = downloadUrl;
    schema.sameAs = [downloadUrl];
  }

  if (datePublished) {
    schema.datePublished = datePublished;
    schema.releaseDate = datePublished;
  }

  if (authors?.length) {
    schema.author = authors.map((authorName) => ({
      '@type': 'Person',
      name: authorName,
    }));
    schema.creator = schema.author;
  }

  return <JsonLd data={schema} />;
}

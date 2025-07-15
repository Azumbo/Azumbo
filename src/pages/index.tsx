import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import nextI18NextConfig from '../../next-i18next.config';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <nav className="nav">
        <a href="#games">{t('games')}</a>
        <a href="#about">{t('about')}</a>
        <a href="#contact">{t('contact')}</a>
      </nav>

      <section id="games" className="section">
        <Image src="/logo/Azumbo Logo no background small size.png" width={150} height={150} alt="Azumbo Logo" className="logo" />
        <h1>Azumbo Games</h1>
        <p>{t('slogan')}</p>
        <h2>{t('featured')}</h2>
        <Link href="/perdonauta-afozio">{t('play')}</Link>
      </section>

      <section id="about" className="section">
        <h2>{t('about')}</h2>
        <p>{t('slogan')}</p>
      </section>

      <section id="contact" className="section">
        <h2>{t('contact')}</h2>
        <p>
          <a href="mailto:AzumboGames@gmail.com">AzumboGames@gmail.com</a>
        </p>
        <p>
          <a href="https://twitter.com/AzumboGames" target="_blank" rel="noopener noreferrer">Twitter</a> |
          <a href="https://github.com/AzumboGames" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, locale }) => {
  let detected = locale;
  if (!detected && req.headers['accept-language']) {
    detected = req.headers['accept-language'].split(',')[0].split('-')[0];
  }
  if (!detected || !nextI18NextConfig.i18n.locales.includes(detected)) {
    detected = nextI18NextConfig.i18n.defaultLocale;
  }
  return {
    props: {
      ...(await serverSideTranslations(detected, ['common'], nextI18NextConfig)),
    },
  };
};

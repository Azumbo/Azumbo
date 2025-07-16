import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import nextI18NextConfig from '../../next-i18next.config';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const preferred = navigator.language.split('-')[0];
      if (
        router.locale !== preferred &&
        nextI18NextConfig.i18n.locales.includes(preferred)
      ) {
        router.replace(router.asPath, router.asPath, { locale: preferred });
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);

'use client';

import { useState } from 'react';
import LanguageSwitch, { Language } from '../../../components/LanguageSwitch';
import type { ReactNode } from 'react';

interface Section {
  id: string;
  title: string;
  content: ReactNode;
}

interface PageContent {
  heading: string;
  metaTitle: string;
  metaDescription: string;
  sections: Section[];
  lastUpdated: string;
}

const content: Record<Language, PageContent> = {
  en: {
    heading: 'Privacy Policy',
    metaTitle: 'Privacy Policy — AZUMBO | City in the Plane',
    metaDescription: 'Privacy Policy for City in the Plane kids coloring app by AZUMBO.',
    sections: [
      {
        id: 'intro',
        title: 'Introduction & Scope',
        content: (
          <p>
            We respect your privacy. This Policy covers City in the Plane kids coloring app by
            AZUMBO.
          </p>
        )
      },
      {
        id: 'collect',
        title: 'Data We Collect',
        content: (
          <p>
            The app does not require login and does not collect personal data. Our hosting may log
            IP address, user-agent and timestamps for security.
          </p>
        )
      },
      {
        id: 'storage',
        title: 'Local Storage',
        content: (
          <p>
            We may store minimal progress locally on your device. No tracking cookies or analytics
            are used.
          </p>
        )
      },
      {
        id: 'ads',
        title: 'Third Parties',
        content: (
          <p>
            The app contains no third-party ads or analytics intended for tracking.
          </p>
        )
      },
      {
        id: 'children',
        title: 'Children',
        content: (
          <p>
            The app is designed for children and complies with COPPA/GDPR-K. We do not knowingly
            collect personal data from children. Parents may contact us to remove information.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Changes',
        content: (
          <p>
            We may update this policy and will post updates here.
          </p>
        )
      },
      {
        id: 'contact',
        title: 'Contact',
        content: (
          <p>
            For privacy inquiries, email{' '}
            <a className="underline" href="mailto:azumbogames@gmail.com">
              azumbogames@gmail.com
            </a>
            .
          </p>
        )
      }
    ],
    lastUpdated: 'Last Updated: August 23, 2025'
  },
  it: {
    heading: 'Informativa sulla Privacy',
    metaTitle: 'Informativa sulla Privacy — AZUMBO | City in the Plane',
    metaDescription: 'Informativa sulla privacy per l\'app di colorazione City in the Plane di AZUMBO.',
    sections: [
      {
        id: 'intro',
        title: 'Introduzione e Ambito',
        content: (
          <p>
            Rispettiamo la tua privacy. Questa Informativa riguarda l\'app di colorazione City in the
            Plane di AZUMBO.
          </p>
        )
      },
      {
        id: 'collect',
        title: 'Dati che Raccogliamo',
        content: (
          <p>
            L\'app non richiede account e non raccoglie dati personali. L\'hosting può registrare IP,
            user-agent e timestamp per sicurezza.
          </p>
        )
      },
      {
        id: 'storage',
        title: 'Storage Locale',
        content: (
          <p>
            Possiamo salvare i progressi localmente sul tuo dispositivo. Non usiamo cookie di
            tracciamento né analytics.
          </p>
        )
      },
      {
        id: 'ads',
        title: 'Terze Parti',
        content: (
          <p>
            L\'app non contiene annunci né analisi di terze parti per il tracciamento.
          </p>
        )
      },
      {
        id: 'children',
        title: 'Bambini',
        content: (
          <p>
            L\'app è progettata per bambini e rispetta COPPA/GDPR-K. Non raccogliamo consapevolmente
            dati personali dei bambini. I genitori possono contattarci per la rimozione di
            informazioni.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Modifiche',
        content: (
          <p>
            Possiamo aggiornare questa Informativa e pubblicheremo qui le modifiche.
          </p>
        )
      },
      {
        id: 'contact',
        title: 'Contatti',
        content: (
          <p>
            Per richieste sulla privacy, invia un\'email a{' '}
            <a className="underline" href="mailto:azumbogames@gmail.com">
              azumbogames@gmail.com
            </a>
            .
          </p>
        )
      }
    ],
    lastUpdated: 'Ultimo aggiornamento: 23 agosto 2025'
  },
  ru: {
    heading: 'Политика конфиденциальности',
    metaTitle: 'Политика конфиденциальности — AZUMBO | City in the Plane',
    metaDescription: 'Политика конфиденциальности для детского приложения раскраски City in the Plane от AZUMBO.',
    sections: [
      {
        id: 'intro',
        title: 'Введение и Область действия',
        content: (
          <p>
            Мы уважаем вашу конфиденциальность. Эта Политика относится к детскому приложению
            раскраски City in the Plane от AZUMBO.
          </p>
        )
      },
      {
        id: 'collect',
        title: 'Какие данные мы собираем',
        content: (
          <p>
            Приложение не требует регистрации и не собирает персональные данные. Хостинг может
            логировать IP-адрес, user-agent и временные метки в целях безопасности.
          </p>
        )
      },
      {
        id: 'storage',
        title: 'Локальное хранение',
        content: (
          <p>
            Мы можем сохранять минимальные данные прогресса на устройстве. Трекеры и аналитика не
            используются.
          </p>
        )
      },
      {
        id: 'ads',
        title: 'Сторонние сервисы',
        content: (
          <p>
            Приложение не содержит сторонней рекламы или аналитики для отслеживания.
          </p>
        )
      },
      {
        id: 'children',
        title: 'Дети',
        content: (
          <p>
            Приложение предназначено для детей и соответствует требованиям COPPA/GDPR-K. Мы не
            собираем сознательно личные данные детей. Родители могут связаться с нами для удаления
            информации.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Изменения',
        content: (
          <p>
            Мы можем обновлять эту Политику и будем публиковать изменения здесь.
          </p>
        )
      },
      {
        id: 'contact',
        title: 'Контакты',
        content: (
          <p>
            По вопросам конфиденциальности пишите на{' '}
            <a className="underline" href="mailto:azumbogames@gmail.com">
              azumbogames@gmail.com
            </a>
            .
          </p>
        )
      }
    ],
    lastUpdated: 'Обновлено: 23 августа 2025'
  }
};

export default function PrivacyPage() {
  const [lang, setLang] = useState<Language>('en');
  const page = content[lang];

  return (
    <div className="mx-auto max-w-2xl p-4 space-y-8">
      <LanguageSwitch lang={lang} setLang={setLang} />
      <h1 className="text-3xl font-bold">{page.heading}</h1>
      {page.sections.map((section) => (
        <section key={section.id} id={section.id} className="space-y-2">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          {section.content}
        </section>
      ))}
      <p className="text-sm text-neutral-500">{page.lastUpdated}</p>
    </div>
  );
}


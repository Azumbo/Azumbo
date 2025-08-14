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
    metaTitle: 'Privacy Policy — AZUMBO | Mr Cup Cornetto',
    metaDescription: 'Privacy Policy for Mr Cup Cornetto by AZUMBO (GDPR-ready).',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction & Scope',
        content: (
          <p>
            We respect your privacy. This Policy explains how AZUMBO handles data for Mr Cup
            Cornetto.
          </p>
        )
      },
      {
        id: 'collect',
        title: 'What We Collect',
        content: (
          <p>
            On the website we do not collect account data or direct personal data. Our hosting
            provider may log IP address, user-agent, and timestamps.
          </p>
        )
      },
      {
        id: 'cookies',
        title: 'Cookies/Local Storage',
        content: (
          <p>
            We use only essential cookies or local storage; no tracking cookies are used on these
            pages.
          </p>
        )
      },
      {
        id: 'mobile-ads',
        title: 'Mobile Ads & Third Parties',
        content: (
          <p>
            Mobile versions may show ads via third parties such as ironSource or Unity Ads. Their
            data handling is governed by their policies.
          </p>
        )
      },
      {
        id: 'legal-bases',
        title: 'Legal Bases',
        content: (
          <p>
            Legal bases under GDPR Article 6 include legitimate interests (security and fraud
            prevention), compliance with legal obligations, and consent where required for ads in
            mobile builds.
          </p>
        )
      },
      {
        id: 'use',
        title: 'How We Use Data',
        content: (
          <p>
            We use data for security, performance, aggregated analytics, and to improve the game.
          </p>
        )
      },
      {
        id: 'sharing',
        title: 'Data Sharing',
        content: (
          <p>
            Data may be shared with hosting and infrastructure providers and with ad networks in
            mobile apps. We do not sell personal data.
          </p>
        )
      },
      {
        id: 'transfers',
        title: 'International Transfers',
        content: (
          <p>
            When data is transferred outside the EU/EEA, we apply safeguards in line with GDPR,
            including Standard Contractual Clauses where applicable.
          </p>
        )
      },
      {
        id: 'retention',
        title: 'Data Retention',
        content: (
          <p>
            Data is kept to a minimum and only for as long as necessary for the purposes described.
          </p>
        )
      },
      {
        id: 'rights',
        title: 'Your Rights',
        content: (
          <>
            <p>You have the following rights under GDPR:</p>
            <ul className="list-disc pl-5">
              <li>access;</li>
              <li>rectification;</li>
              <li>erasure;</li>
              <li>restriction;</li>
              <li>portability;</li>
              <li>objection.</li>
            </ul>
            <p>
              To exercise these rights, contact us at{' '}
              <a className="underline" href="mailto:azumbogames@gmail.com">azumbogames@gmail.com</a>.
            </p>
          </>
        )
      },
      {
        id: 'children',
        title: 'Children',
        content: (
          <p>
            The game targets a general audience and we do not knowingly collect personal data from
            children. Parents can contact us regarding concerns.
          </p>
        )
      },
      {
        id: 'links',
        title: 'Links to Third Parties & Social Sharing',
        content: (
          <p>
            External sites have their own policies. We are not responsible for their content or
            practices.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Changes to this Policy',
        content: (
          <p>
            We may update this Policy and will post changes here.
          </p>
        )
      },
      {
        id: 'contact',
        title: 'Contact',
        content: (
          <p>
            For privacy inquiries, email{' '}
            <a className="underline" href="mailto:azumbogames@gmail.com">azumbogames@gmail.com</a>.
          </p>
        )
      }
    ],
    lastUpdated: 'Last Updated: August 14, 2025'
  },
  it: {
    heading: 'Informativa sulla Privacy',
    metaTitle: 'Informativa sulla Privacy — AZUMBO | Mr Cup Cornetto',
    metaDescription: 'Informativa sulla privacy per Mr Cup Cornetto di AZUMBO (conforme GDPR).',
    sections: [
      {
        id: 'introduction',
        title: 'Introduzione e Ambito',
        content: (
          <p>
            Rispettiamo la tua privacy. Questa Informativa spiega come AZUMBO gestisce i dati per Mr
            Cup Cornetto.
          </p>
        )
      },
      {
        id: 'collect',
        title: 'Cosa Raccogliamo',
        content: (
          <p>
            Sul sito non raccogliamo dati di account né dati personali diretti. Il nostro provider di
            hosting può registrare IP, user-agent e timestamp.
          </p>
        )
      },
      {
        id: 'cookies',
        title: 'Cookie/Archiviazione Locale',
        content: (
          <p>
            Utilizziamo solo cookie o archiviazione locale essenziali; nessun cookie di tracciamento è
            presente su queste pagine.
          </p>
        )
      },
      {
        id: 'mobile-ads',
        title: 'Annunci Mobili e Terze Parti',
        content: (
          <p>
            Le versioni mobili possono mostrare annunci tramite terze parti come ironSource o Unity
            Ads. Il trattamento dei dati è regolato dalle loro politiche.
          </p>
        )
      },
      {
        id: 'legal-bases',
        title: 'Basi Giuridiche',
        content: (
          <p>
            Le basi giuridiche ai sensi dell'articolo 6 GDPR includono interessi legittimi (sicurezza
            e prevenzione frodi), obblighi legali e consenso quando richiesto per gli annunci nelle
            build mobili.
          </p>
        )
      },
      {
        id: 'use',
        title: 'Come Usiamo i Dati',
        content: (
          <p>
            Usiamo i dati per sicurezza, prestazioni, analisi aggregate e per migliorare il gioco.
          </p>
        )
      },
      {
        id: 'sharing',
        title: 'Condivisione dei Dati',
        content: (
          <p>
            I dati possono essere condivisi con provider di hosting e infrastruttura e con reti
            pubblicitarie nelle app mobili. Non vendiamo dati personali.
          </p>
        )
      },
      {
        id: 'transfers',
        title: 'Trasferimenti Internazionali',
        content: (
          <p>
            Quando i dati vengono trasferiti fuori dall'UE/SEE, applichiamo garanzie conformi al GDPR,
            incluse le Clausole Contrattuali Standard quando applicabili.
          </p>
        )
      },
      {
        id: 'retention',
        title: 'Conservazione dei Dati',
        content: (
          <p>
            I dati sono mantenuti al minimo e solo per il tempo necessario agli scopi descritti.
          </p>
        )
      },
      {
        id: 'rights',
        title: 'I Tuoi Diritti',
        content: (
          <>
            <p>Hai i seguenti diritti ai sensi del GDPR:</p>
            <ul className="list-disc pl-5">
              <li>accesso;</li>
              <li>rettifica;</li>
              <li>cancellazione;</li>
              <li>limitazione;</li>
              <li>portabilità;</li>
              <li>opposizione.</li>
            </ul>
            <p>
              Per esercitare tali diritti, scrivici a{' '}
              <a className="underline" href="mailto:azumbogames@gmail.com">azumbogames@gmail.com</a>.
            </p>
          </>
        )
      },
      {
        id: 'children',
        title: 'Bambini',
        content: (
          <p>
            Il gioco è destinato a un pubblico generico e non raccogliamo consapevolmente dati
            personali dei minori. I genitori possono contattarci per eventuali dubbi.
          </p>
        )
      },
      {
        id: 'links',
        title: 'Link a Terzi e Condivisione Sociale',
        content: (
          <p>
            I siti esterni hanno le proprie politiche. Non siamo responsabili dei loro contenuti o
            pratiche.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Modifiche a questa Informativa',
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
            Per richieste sulla privacy, invia un'email a{' '}
            <a className="underline" href="mailto:azumbogames@gmail.com">azumbogames@gmail.com</a>.
          </p>
        )
      }
    ],
    lastUpdated: 'Ultimo aggiornamento: 14 agosto 2025'
  },
  ru: {
    heading: 'Политика конфиденциальности',
    metaTitle: 'Политика конфиденциальности — AZUMBO | Mr Cup Cornetto',
    metaDescription: 'Политика конфиденциальности Mr Cup Cornetto от AZUMBO (GDPR).',
    sections: [
      {
        id: 'introduction',
        title: 'Введение и сфера действия',
        content: (
          <p>
            Мы уважаем вашу конфиденциальность. Эта Политика объясняет, как AZUMBO обрабатывает данные
            для Mr Cup Cornetto.
          </p>
        )
      },
      {
        id: 'collect',
        title: 'Что мы собираем',
        content: (
          <p>
            На веб‑сайте мы не собираем данные аккаунта или прямые персональные данные. Провайдер
            хостинга может вести журналы IP‑адресов, user-agent и отметок времени.
          </p>
        )
      },
      {
        id: 'cookies',
        title: 'Cookies/Локальное хранилище',
        content: (
          <p>
            Мы используем только необходимые cookie или локальное хранилище; на этих страницах нет
            отслеживающих cookie.
          </p>
        )
      },
      {
        id: 'mobile-ads',
        title: 'Мобильная реклама и сторонние сервисы',
        content: (
          <p>
            Мобильные версии могут показывать рекламу через сторонние сети, такие как ironSource или
            Unity Ads. Обработка данных регулируется их политиками.
          </p>
        )
      },
      {
        id: 'legal-bases',
        title: 'Правовые основания',
        content: (
          <p>
            Правовые основания в соответствии со ст. 6 GDPR включают законные интересы (безопасность и
            предотвращение мошенничества), выполнение правовых обязательств и согласие, когда оно
            требуется для рекламы в мобильных сборках.
          </p>
        )
      },
      {
        id: 'use',
        title: 'Как мы используем данные',
        content: (
          <p>
            Мы используем данные для безопасности, производительности, агрегированной аналитики и
            улучшения игры.
          </p>
        )
      },
      {
        id: 'sharing',
        title: 'Передача данных',
        content: (
          <p>
            Данные могут передаваться провайдерам хостинга и инфраструктуры, а также рекламным сетям в
            мобильных приложениях. Мы не продаём персональные данные.
          </p>
        )
      },
      {
        id: 'transfers',
        title: 'Международные передачи',
        content: (
          <p>
            При передаче данных за пределы ЕС/ЕЭЗ мы применяем меры защиты в соответствии с GDPR,
            включая стандартные договорные положения, когда это применимо.
          </p>
        )
      },
      {
        id: 'retention',
        title: 'Хранение данных',
        content: (
          <p>
            Данные хранятся минимально и только столько, сколько необходимо для описанных целей.
          </p>
        )
      },
      {
        id: 'rights',
        title: 'Ваши права',
        content: (
          <>
            <p>Согласно GDPR вы имеете права:</p>
            <ul className="list-disc pl-5">
              <li>на доступ;</li>
              <li>на исправление;</li>
              <li>на удаление;</li>
              <li>на ограничение обработки;</li>
              <li>на переносимость;</li>
              <li>на возражение.</li>
            </ul>
            <p>
              Для реализации прав напишите нам на{' '}
              <a className="underline" href="mailto:azumbogames@gmail.com">azumbogames@gmail.com</a>.
            </p>
          </>
        )
      },
      {
        id: 'children',
        title: 'Дети',
        content: (
          <p>
            Игра рассчитана на широкую аудиторию; мы сознательно не собираем персональные данные
            детей. Родители могут связаться с нами при наличии вопросов.
          </p>
        )
      },
      {
        id: 'links',
        title: 'Ссылки на сторонние ресурсы и социальный обмен',
        content: (
          <p>
            Внешние сайты имеют собственные политики. Мы не несём ответственности за их содержимое или
            практики.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Изменения этой Политики',
        content: (
          <p>
            Мы можем обновлять эту Политику и опубликуем изменения здесь.
          </p>
        )
      },
      {
        id: 'contact',
        title: 'Контакты',
        content: (
          <p>
            По вопросам конфиденциальности пишите на{' '}
            <a className="underline" href="mailto:azumbogames@gmail.com">azumbogames@gmail.com</a>.
          </p>
        )
      }
    ],
    lastUpdated: 'Дата обновления: 14 августа 2025'
  }
};

export default function PrivacyPage() {
  const [lang, setLang] = useState<Language>('en');
  const current = content[lang];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: current.metaTitle,
    inLanguage: lang,
    description: current.metaDescription,
    url: 'https://azumbo.com/cornettoclicker/privacy'
  };

  return (
    <article lang={lang} className="container mx-auto max-w-3xl px-4 py-8">
      <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm rounded-md p-6 leading-relaxed space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-2xl font-bold">AZUMBO</div>
            <p className="text-sm">Mr Cup Cornetto — Legal</p>
          </div>
          <LanguageSwitch lang={lang} setLang={setLang} />
        </div>
        <h1 className="text-3xl font-bold text-center">{current.heading}</h1>
        <nav className="text-sm">
          <ul className="flex flex-wrap gap-2">
            {current.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {current.sections.map((s) => (
          <section id={s.id} key={s.id} className="space-y-2">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            {s.content}
          </section>
        ))}
        <p className="text-sm text-gray-500 dark:text-zinc-400">{current.lastUpdated}</p>
        <div className="text-sm">
          <a href="/cornettoclicker/privacy" className="underline">Privacy Policy</a> ↔{' '}
          <a href="/cornettoclicker/terms" className="underline">Terms of Service</a>
        </div>
        <footer className="border-t border-gray-200 dark:border-zinc-700 pt-4 text-center text-sm">
          © 2025 AZUMBO —{' '}
          <a href="mailto:azumbogames@gmail.com" className="underline">
            azumbogames@gmail.com
          </a>
        </footer>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}


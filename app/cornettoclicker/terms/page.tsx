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
    heading: 'Terms of Service',
    metaTitle: 'Terms of Service — AZUMBO | Mr Cup Cornetto',
    metaDescription: 'Official Terms of Service for Mr Cup Cornetto by AZUMBO.',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: (
          <p>
            These Terms of Service (“Terms”) govern your use of Mr Cup Cornetto by AZUMBO. By
            accessing or using the game or related services, you agree to these Terms.
          </p>
        )
      },
      {
        id: 'eligibility',
        title: 'Eligibility & Platform',
        content: (
          <p>
            You must be legally permitted to use the service in your jurisdiction. The game is
            available on the web and may be distributed on mobile platforms. Some features may
            vary by platform.
          </p>
        )
      },
      {
        id: 'gameplay',
        title: 'Gameplay & Virtual Items',
        content: (
          <p>
            Mr Cup Cornetto offers purely virtual items and gameplay benefits without real-world
            value. The web version has no purchases or real-money transactions. Mobile versions
            may display advertisements.
          </p>
        )
      },
      {
        id: 'ads',
        title: 'Ads & Third Parties',
        content: (
          <p>
            Mobile builds may integrate ad networks such as ironSource or Unity Ads. Ads or
            external links may take you away from the game. AZUMBO is not responsible for
            third-party content or policies.
          </p>
        )
      },
      {
        id: 'conduct',
        title: 'User Conduct',
        content: (
          <>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5">
              <li>cheat, exploit bugs, or interfere with gameplay;</li>
              <li>upload or share illegal or offensive content;</li>
              <li>violate any applicable laws or regulations.</li>
            </ul>
          </>
        )
      },
      {
        id: 'ip',
        title: 'IP & License',
        content: (
          <p>
            All intellectual property in Mr Cup Cornetto remains with AZUMBO. We grant you a
            limited, revocable, non-transferable license to use the game for personal,
            non-commercial purposes.
          </p>
        )
      },
      {
        id: 'disclaimer',
        title: 'Disclaimers & Limitation of Liability',
        content: (
          <>
            <p>The game is provided “AS IS” without warranties. To the extent permitted by law:</p>
            <ul className="list-disc pl-5">
              <li>AZUMBO disclaims all implied warranties; and</li>
              <li>AZUMBO is not liable for indirect, incidental, or consequential damages.</li>
            </ul>
          </>
        )
      },
      {
        id: 'termination',
        title: 'Termination',
        content: (
          <p>
            We may suspend or terminate your access to the game at any time for any reason,
            including violation of these Terms.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Changes to the Terms',
        content: (
          <p>
            We may modify these Terms from time to time. Material changes will be posted, and
            continued use after changes means acceptance.
          </p>
        )
      },
      {
        id: 'law',
        title: 'Governing Law & Dispute Resolution',
        content: (
          <p>
            These Terms are governed by the laws of Italy and applicable EU regulations. Mandatory
            consumer rights remain unaffected. Disputes will be resolved in the courts of Italy
            unless local law requires otherwise.
          </p>
        )
      },
      {
        id: 'contact',
        title: 'Contact',
        content: (
          <p>
            For questions, email <a className="underline" href="mailto:azumbogames@gmail.com">azumbogames@gmail.com</a>.
          </p>
        )
      }
    ],
    lastUpdated: 'Last Updated: August 14, 2025'
  },
  it: {
    heading: 'Condizioni di Servizio',
    metaTitle: 'Condizioni di Servizio — AZUMBO | Mr Cup Cornetto',
    metaDescription: 'Condizioni di servizio ufficiali di Mr Cup Cornetto di AZUMBO.',
    sections: [
      {
        id: 'introduction',
        title: 'Introduzione',
        content: (
          <p>
            Queste Condizioni di Servizio (“Condizioni”) regolano l'uso di Mr Cup Cornetto da parte
            di AZUMBO. Accedendo o utilizzando il gioco accetti tali Condizioni.
          </p>
        )
      },
      {
        id: 'eligibility',
        title: 'Idoneità e Piattaforme',
        content: (
          <p>
            Devi essere legalmente autorizzato a usare il servizio nel tuo territorio. Il gioco è
            disponibile sul web e può essere distribuito su piattaforme mobili. Alcune funzioni
            possono variare a seconda della piattaforma.
          </p>
        )
      },
      {
        id: 'gameplay',
        title: 'Gameplay e Oggetti Virtuali',
        content: (
          <p>
            Mr Cup Cornetto offre esclusivamente oggetti virtuali e vantaggi di gioco senza valore
            reale. Nella versione web non sono previste transazioni o acquisti con denaro reale. Le
            versioni mobili possono mostrare pubblicità.
          </p>
        )
      },
      {
        id: 'ads',
        title: 'Pubblicità e Terze Parti',
        content: (
          <p>
            Le build mobili possono integrare reti pubblicitarie come ironSource o Unity Ads. Gli
            annunci o i link esterni possono portarti fuori dal gioco. AZUMBO non è responsabile per
            contenuti o politiche di terzi.
          </p>
        )
      },
      {
        id: 'conduct',
        title: 'Condotta dell’Utente',
        content: (
          <>
            <p>Ti impegni a non:</p>
            <ul className="list-disc pl-5">
              <li>barare, sfruttare bug o interferire con il gameplay;</li>
              <li>caricare o condividere contenuti illegali o offensivi;</li>
              <li>violare leggi o regolamenti applicabili.</li>
            </ul>
          </>
        )
      },
      {
        id: 'ip',
        title: 'Proprietà Intellettuale e Licenza',
        content: (
          <p>
            Tutta la proprietà intellettuale di Mr Cup Cornetto rimane di AZUMBO. Ti concediamo una
            licenza limitata, revocabile e non trasferibile per usare il gioco a fini personali e non
            commerciali.
          </p>
        )
      },
      {
        id: 'disclaimer',
        title: 'Esclusioni di Garanzia e Limitazioni di Responsabilità',
        content: (
          <>
            <p>Il gioco è fornito “COSÌ COM'È” senza garanzie. Nella misura consentita dalla legge:</p>
            <ul className="list-disc pl-5">
              <li>AZUMBO declina tutte le garanzie implicite; e</li>
              <li>AZUMBO non è responsabile per danni indiretti, incidentali o consequenziali.</li>
            </ul>
          </>
        )
      },
      {
        id: 'termination',
        title: 'Risoluzione',
        content: (
          <p>
            Possiamo sospendere o terminare il tuo accesso al gioco in qualsiasi momento per qualsiasi
            motivo, incluso il mancato rispetto di queste Condizioni.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Modifiche alle Condizioni',
        content: (
          <p>
            Possiamo modificare queste Condizioni periodicamente. Le modifiche rilevanti saranno
            pubblicate e l'uso continuato dopo le modifiche implica accettazione.
          </p>
        )
      },
      {
        id: 'law',
        title: 'Legge Applicabile e Controversie',
        content: (
          <p>
            Le presenti Condizioni sono regolate dalla legge italiana e dalle normative UE
            applicabili. I diritti dei consumatori previsti per legge restano invariati. Le
            controversie saranno risolte presso i tribunali italiani salvo diversa disposizione di
            legge locale.
          </p>
        )
      },
      {
        id: 'contact',
        title: 'Contatti',
        content: (
          <p>
            Per domande, invia un'email a <a className="underline" href="mailto:azumbogames@gmail.com">azumbogames@gmail.com</a>.
          </p>
        )
      }
    ],
    lastUpdated: 'Ultimo aggiornamento: 14 agosto 2025'
  },
  ru: {
    heading: 'Условия использования',
    metaTitle: 'Условия использования — AZUMBO | Mr Cup Cornetto',
    metaDescription: 'Официальные Условия использования Mr Cup Cornetto от AZUMBO.',
    sections: [
      {
        id: 'introduction',
        title: 'Введение',
        content: (
          <p>
            Настоящие Условия использования («Условия») регулируют ваше использование игры Mr Cup
            Cornetto компании AZUMBO. Получая доступ к игре или используя её, вы соглашаетесь с этими
            Условиями.
          </p>
        )
      },
      {
        id: 'eligibility',
        title: 'Допуск и платформы',
        content: (
          <p>
            Вы должны иметь право пользоваться сервисом в своей юрисдикции. Игра доступна в вебе и
            может распространяться на мобильных платформах. Возможности могут различаться в
            зависимости от платформы.
          </p>
        )
      },
      {
        id: 'gameplay',
        title: 'Геймплей и виртуальные предметы',
        content: (
          <p>
            Mr Cup Cornetto предлагает исключительно виртуальные предметы и игровые преимущества, не
            имеющие реальной ценности. На веб‑странице нет покупок или операций с реальными деньгами.
            Мобильные версии могут показывать рекламу.
          </p>
        )
      },
      {
        id: 'ads',
        title: 'Реклама и сторонние сервисы',
        content: (
          <p>
            В мобильных сборках могут использоваться рекламные сети, такие как ironSource или Unity
            Ads. Объявления или внешние ссылки могут перенаправлять вас с сайта. AZUMBO не несёт
            ответственности за сторонний контент и политики.
          </p>
        )
      },
      {
        id: 'conduct',
        title: 'Поведение пользователя',
        content: (
          <>
            <p>Вы соглашаетесь не:</p>
            <ul className="list-disc pl-5">
              <li>читерить, использовать ошибки или мешать игровому процессу;</li>
              <li>загружать или распространять незаконный либо оскорбительный контент;</li>
              <li>нарушать любые применимые законы и правила.</li>
            </ul>
          </>
        )
      },
      {
        id: 'ip',
        title: 'Права ИС и лицензия',
        content: (
          <p>
            Все права на интеллектуальную собственность Mr Cup Cornetto принадлежат AZUMBO. Вам
            предоставляется ограниченная, отзывная, непередаваемая лицензия на использование игры в
            личных некоммерческих целях.
          </p>
        )
      },
      {
        id: 'disclaimer',
        title: 'Отказ от гарантий и ограничение ответственности',
        content: (
          <>
            <p>Игра предоставляется «КАК ЕСТЬ» без каких-либо гарантий. В пределах, допускаемых
              законом:</p>
            <ul className="list-disc pl-5">
              <li>AZUMBO отказывается от всех подразумеваемых гарантий; и</li>
              <li>AZUMBO не несёт ответственности за косвенные, случайные или последующие убытки.</li>
            </ul>
          </>
        )
      },
      {
        id: 'termination',
        title: 'Прекращение действия',
        content: (
          <p>
            Мы можем приостановить или прекратить ваш доступ к игре в любое время и по любой причине,
            включая нарушение настоящих Условий.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Изменения Условий',
        content: (
          <p>
            Мы можем периодически обновлять эти Условия. Существенные изменения будут опубликованы, и
            продолжение использования после изменений означает ваше согласие.
          </p>
        )
      },
      {
        id: 'law',
        title: 'Применимое право и споры',
        content: (
          <p>
            Настоящие Условия регулируются законами Италии и применимым законодательством ЕС.
            Обязательные права потребителей сохраняются. Споры подлежат рассмотрению в судах Италии,
            если иное не предусмотрено обязательным законодательством.
          </p>
        )
      },
      {
        id: 'contact',
        title: 'Контакты',
        content: (
          <p>
            По вопросам пишите на <a className="underline" href="mailto:azumbogames@gmail.com">azumbogames@gmail.com</a>.
          </p>
        )
      }
    ],
    lastUpdated: 'Дата обновления: 14 августа 2025'
  }
};

export default function TermsPage() {
  const [lang, setLang] = useState<Language>('en');
  const current = content[lang];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: current.metaTitle,
    inLanguage: lang,
    description: current.metaDescription,
    url: 'https://azumbo.com/cornettoclicker/terms'
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


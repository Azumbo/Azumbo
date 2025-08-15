export const gameConfig = {
  title: 'Pixel Quest',
  languages: ['en', 'it', 'ru'],
  defaultLanguage: 'en',
  apiEndpoint: '/api',
};

export const localization = {
  en: {
    languageSelect: 'Choose your language',
    startScreen: {
      title: 'OPERATION BUCATINI',
      instruction: 'Enter your nickname and email to begin',
      nickname: 'Nickname',
      email: 'Email',
      submit: 'Start Game',
    },
    finishScreen: {
      title: '🎉 Congratulations!',
      message: "You've completed the game!",
      copy: 'Copy code',
    },
    stats: {
      title: 'Leaderboard',
    },
  },
  it: {
    languageSelect: 'Scegli la tua lingua',
    startScreen: {
      title: 'OPERAZIONE BUCATINI',
      instruction: 'Inserisci il tuo nickname e l\'email per iniziare',
      nickname: 'Nickname',
      email: 'Email',
      submit: 'Avvia gioco',
    },
    finishScreen: {
      title: '🎉 Complimenti!',
      message: 'Hai completato il gioco!',
      copy: 'Copia codice',
    },
    stats: {
      title: 'Classifica',
    },
  },
  ru: {
    languageSelect: 'Выбери язык',
    startScreen: {
      title: 'ОПЕРАЦИЯ БУКАТИНИ',
      instruction: 'Введите никнейм и email, чтобы начать игру',
      nickname: 'Никнейм',
      email: 'Email',
      submit: 'Начать игру',
    },
    finishScreen: {
      title: '🎉 Поздравляем!',
      message: 'Вы прошли игру!',
      copy: 'Скопировать код',
    },
    stats: {
      title: 'Таблица лидеров',
    },
  },
} as const;

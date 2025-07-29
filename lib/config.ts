export const gameConfig = {
  title: 'Commander Mola Mola Pixel Quest',
  languages: ['en', 'it', 'ru'],
  defaultLanguage: 'en',
  apiEndpoint: '/api',
  adminEmail: 'CommanderMolaMola@gmail.com',
  socialLinks: {
    youtube: 'https://www.youtube.com/@CommanderMolaMola',
    tiktok: 'https://www.tiktok.com/@commandermolamola',
  },
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
      message: "You've completed the game and mined your Mola Mola Coin!",
      action: 'Take a screenshot and send it to',
      social: 'Subscribe to our YouTube and TikTok',
      comment: 'Write in comments: "I finished the game and mined Mola Mola Coin!"',
      copy: 'Copy code',
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
      message: 'Hai completato il gioco e minato la tua Mola Mola Coin!',
      action: 'Fai uno screenshot e invialo a',
      social: 'Iscriviti al nostro YouTube e TikTok',
      comment: 'Scrivi nei commenti: "Ho finito il gioco e minato la Mola Mola Coin!"',
      copy: 'Copia codice',
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
      message: 'Вы прошли игру и намайнили свою Mola Mola Coin!',
      action: 'Сделайте скриншот и отправьте его на',
      social: 'Подпишитесь на наш YouTube и TikTok',
      comment: 'Напишите в комментариях: «Я прошёл игру и намайнил Mola Mola Coin!»',
      copy: 'Скопировать код',
    },
  },
} as const;

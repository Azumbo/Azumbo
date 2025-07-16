module.exports = {
  i18n: {
    defaultLocale: 'en',
    // Limit supported languages to the ones we actually provide translations
    // for and want to expose in the UI. This keeps routing simpler and
    // matches the expected languages from the docs.
    locales: ['en', 'it', 'ru'],
  },
};

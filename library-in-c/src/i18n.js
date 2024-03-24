// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // Carrega a tradução usando http -> veja /public/locales. Também é possível carregar os arquivos aqui.
  .use(HttpBackend)
  // Detecta a linguagem do usuário
  .use(LanguageDetector)
  // Passa o i18n para o react-i18next.
  .use(initReactI18next)
  // Inicia o i18next
  .init({
    debug: true,
    fallbackLng: 'en',
    ns: ['common', 'home', 'tools'], // Adicione todos os namespaces necessários aqui
    defaultNS: 'common',
    backend: {
      loadPath: '/public/locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18n

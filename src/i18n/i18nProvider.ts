import polyglotI18nProvider from 'ra-i18n-polyglot'
import englishMessages from 'ra-language-english'
import frenchMessages from 'ra-language-french'
import { resolveBrowserLocale, TranslationMessages } from 'react-admin'

const messages: Record<string, TranslationMessages> = {
  fr: frenchMessages,
  en: englishMessages
}
export const i18nProvider = polyglotI18nProvider(
  locale => (messages[locale] ? messages[locale] : messages.en),
  resolveBrowserLocale()
)

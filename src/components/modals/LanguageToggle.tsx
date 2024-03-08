import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next';

type Props = {
  settingName: string
  description?: string
}

export const LanguageToggle = ({
  settingName,
  description,
}: Props) => {
  const { t } = useTranslation()

  const changeLanguage = () => { i18n.language === 'fr' ? i18n.changeLanguage('en') : i18n.changeLanguage('fr')}
  return (
    <>
      <div className="flex justify-between gap-4 py-3">
        <div className="mt-2 text-left text-gray-500 dark:text-gray-300">
          <p className="leading-none">{settingName}</p>
          {description && (
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
        <button
        onClick={changeLanguage}
        type="button"
        className="mt-2 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-left text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:border-gray-200
          disabled:bg-white disabled:text-gray-900 disabled:focus:outline-none disabled:dark:border-gray-600 disabled:dark:bg-gray-800 disabled:dark:text-gray-400 sm:text-sm"
      >
        {i18n.language === 'fr' ? t("FRENCH") : t("ENGLISH")}
      </button>
      </div>
    </>
  )
}

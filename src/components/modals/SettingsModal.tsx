import { useTranslation } from 'react-i18next'
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import { LanguageToggle } from './LanguageToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
  guesses: number
  isGameLost: boolean
  isGameWon: boolean
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
  guesses,
  isGameLost,
  isGameWon,
}: Props) => {
  const { t } = useTranslation();
  return (
    <BaseModal title={t("SETTINGS")} isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-2 flex flex-col divide-y">
        <SettingsToggle
          settingName={t("HARD_MODE")}
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={t("HARD_MODE_DESCRIPTION")}
        />
        <SettingsToggle
          settingName={t("DARK_MODE")}
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName={t("HIGH_CONTRAST_MODE")}
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={t("HIGH_CONTRAST_MODE_DESCRIPTION")}
        />
        <LanguageToggle
          settingName={t("LANGUAGE")}
          description={t("CHANGE_LAGUAGE")}
          guesses={guesses}
          isGameLost={isGameLost}
          isGameWon={isGameWon}
        />
      </div>
    </BaseModal>
  )
}

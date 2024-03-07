import { useTranslation } from 'react-i18next'
import { GameStats } from '../../lib/localStorage'

type Props = {
  gameStats: GameStats
}

const StatItem = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => {
  return (
    <div className="m-1 w-1/4 items-center justify-center dark:text-white">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}

export const StatBar = ({ gameStats }: Props) => {
  const {t} = useTranslation()
  return (
    <div className="my-2 flex justify-center">
      <StatItem label={t("TOTAL_TRIES_TEXT")} value={gameStats.totalGames} />
      <StatItem label={t("SUCCESS_RATE_TEXT")} value={`${gameStats.successRate}%`} />
      <StatItem label={t("CURRENT_STREAK_TEXT")} value={gameStats.currentStreak} />
      <StatItem label={t("BEST_STREAK_TEXT")} value={gameStats.bestStreak} />
    </div>
  )
}

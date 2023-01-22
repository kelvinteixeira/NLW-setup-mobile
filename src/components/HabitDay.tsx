import clsx from 'clsx'
import dayjs from 'dayjs'
import { Dimensions, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { generateProgressPercentage } from '../utils/generate-progress-percentage'

interface HabitDayProps extends TouchableOpacityProps {
  amountOfHabits?: number
  amountCompleted?: number
  date: Date
}

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5
export const DAY_MARGIN_BETEWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)



export function HabitDay({ amountCompleted = 0, amountOfHabits = 0, date, ...rest }: HabitDayProps) {

  const amountAcccoomplishedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0

  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      className={clsx("rounded-xl border-2 m-1", {
        ["bg-zinc-900 border-zinc-800"]: amountAcccoomplishedPercentage === 0,
        ["bg-violet-900 border-violet-800"]: amountAcccoomplishedPercentage > 0 && amountAcccoomplishedPercentage < 20,
        ["bg-violet-800 border-violet-700"]: amountAcccoomplishedPercentage >= 20 && amountAcccoomplishedPercentage < 40,
        ["bg-violet-700 border-violet-600"]: amountAcccoomplishedPercentage >= 40 && amountAcccoomplishedPercentage < 60,
        ["bg-violet-600 border-violet-500"]: amountAcccoomplishedPercentage >= 60 && amountAcccoomplishedPercentage < 80,
        ["bg-violet-500 border-violet-400"]: amountAcccoomplishedPercentage >= 80,
        ["border-white border-4"]: isCurrentDay
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      {...rest}
    />
  )
}
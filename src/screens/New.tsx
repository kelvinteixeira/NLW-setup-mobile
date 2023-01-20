import { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { BackButton } from "../components/Backbutton";
import { Checkbox } from "../components/Checkbox";

const avalibleWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function New() {
  const [weekDays, setWeekDays] = useState<Array<number>>([])

  function handleToogleWeekDays(index: number) {
    if (weekDays.includes(index)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== index))
    }
    else { setWeekDays(prevState => [...prevState, index]) }
  }
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl" >
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base" >
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus: border-2 focus:border-green-600"
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>

        {
          avalibleWeekDays.map((weekDay, index) => (
            <Checkbox
              title={weekDay}
              key={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToogleWeekDays(index)}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}
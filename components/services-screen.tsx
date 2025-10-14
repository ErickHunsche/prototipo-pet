"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import "./ui/home.css"

interface ServicesScreenProps {
  onBack: () => void
  onNext: () => void
}

export function ServicesScreen({ onBack, onNext }: ServicesScreenProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const daysOfWeek = ["S", "T", "Q", "Q", "S", "S", "D"]
  const dates = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ]

  const timeSlots = [
    ["09:00", "10:00", "11:00", "12:00"],
    ["09:30", "10:30", "11:30", "12:30"],
  ]

  return (
    <div className="min-h-full bg-[#1d6fb8] pb-8">
      <div className="voltar mt-16">
        <button onClick={onBack} className="flex items-center gap-2 text-white">
          <ChevronLeft className="w-6 h-6" />
          <span className="text-base">Voltar aos serviços</span>
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Service Card */}
        <div className="bg-white rounded-lg p-4 flex gap-4">
          <div>
            <h3 className="font-semibold text-[#0a4d8c]">Banho</h3>
            <p className="text-sm text-gray-600">Valor referente ao porte</p>
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <h3 className="font-semibold text-white mb-3">Selecione o dia</h3>
          <div className="bg-white rounded-lg p-4">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map((day, i) => (
                <div key={i} className="text-center text-sm font-semibold text-[#0a4d8c]">
                  {day}
                </div>
              ))}
            </div>
            {dates.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-2 mb-2">
                {week.map((date, dateIndex) => (
                  <button
                    key={dateIndex}
                    onClick={() => date && setSelectedDate(date)}
                    disabled={!date}
                    className={`
                      aspect-square flex items-center justify-center rounded text-sm
                      ${!date ? "invisible" : ""}
                      ${selectedDate === date ? "bg-[#1d6fb8] text-white" : "hover:bg-blue-50"}
                      ${date ? "text-[#0a4d8c]" : ""}
                    `}
                  >
                    {date}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className="font-semibold text-white mb-3">Selecione o horário de chegada</h3>
          <div className="space-y-2">
            {timeSlots.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 gap-2">
                {row.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                      py-2 rounded text-sm font-medium
                      ${selectedTime === time ? "bg-[#0a4d8c] text-white" : "bg-white text-[#0a4d8c] hover:bg-blue-50"}
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={onNext}
          disabled={!selectedDate || !selectedTime}
          className="w-full bg-white hover:bg-gray-100 text-[#0a4d8c] py-6 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirmar Agendamento
        </Button>
      </div>
    </div>
  )
}

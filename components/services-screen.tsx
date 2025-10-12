"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import './ui/home.css'

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
    <div className="min-h-screen bg-[#1d6fb8]">
      {/* Header */}
      <div className="voltar">
        <button onClick={onBack}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-base">Voltar aos serviços</span>
      </div>

      <div className="p-6 space-y-6">
        {/* Service Card */}
        <div className="bg-white rounded-lg p-4 flex gap-4">
          {/* <img src="/pet-hotel.png" alt="Hospedagem" className="w-20 h-20 rounded-lg object-cover" /> */}
          <div>
            <h3 className="font-semibold text-[#540804]">Banho</h3>
            <p className="text-sm text-[#2d0909]">Valor referente ao porte</p>
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <h3 className="font-semibold text-[#540804] mb-3">Selecione o dia</h3>
          <div className="bg-white rounded-lg p-4">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map((day, i) => (
                <div key={i} className="text-center text-sm font-semibold text-[#540804]">
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
                      ${selectedDate === date ? "bg-[#d4a373] text-white" : "hover:bg-[#e9edc9]"}
                      ${date ? "text-[#540804]" : ""}
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
          <h3 className="font-semibold text-[#540804] mb-3">Selecione o horário de chegada</h3>
          <div className="space-y-2">
            {timeSlots.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 gap-2">
                {row.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                      py-2 rounded text-sm font-medium
                      ${
                        selectedTime === time ? "bg-[#d4a373] text-white" : "bg-white text-[#540804] hover:bg-[#e9edc9]"
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Button onClick={onNext} className="w-full bg-[#fff] hover:bg-[#2d0909] text-black py-6 text-base">
          Confirmar Agendamento
        </Button>
      </div>
    </div>
  )
}

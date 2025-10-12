"use client"

import { useState } from "react"
import { ChevronLeft, Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import type { User, Pet } from "@/lib/mock-data"
import "./ui/home.css"

interface PetSelectionScreenProps {
  onBack: () => void
  user: User
  pets: Pet[]
}

export function PetSelectionScreen({ onBack, user, pets }: PetSelectionScreenProps) {
  const [selectedPet, setSelectedPet] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [specialCare, setSpecialCare] = useState("")
  const [date, setDate] = useState<Date | undefined>(new Date("2025-11-14"))

  const displayPets = [
    ...pets.map((pet) => ({
      id: pet.id,
      name: pet.name,
      image: pet.image,
    })),
    { id: "add", name: "+", image: "" },
  ]

  const timeSlots = [
    ["09:00", "10:00", "11:00", "12:00"],
    ["09:30", "10:30", "11:30", "12:30"],
    ["13:00", "14:00", "15:00", "16:00"],
    ["13:30", "14:30", "15:30", "16:30"],
  ]

  const handleConfirmBooking = () => {
    if (!selectedPet || !selectedTime) {
      alert("Por favor, selecione um pet e um horário")
      return
    }

    const selectedPetData = pets.find((p) => p.id === selectedPet)
    const formattedDate = date
      ? date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })
      : "Data não selecionada"

    console.log("[v0] Agendamento confirmado:", {
      user: user.name,
      pet: selectedPetData?.name,
      date: formattedDate,
      time: selectedTime,
      specialCare: specialCare || "Nenhum",
    })

    alert(
      `Agendamento confirmado!\n\nCliente: ${user.name}\nPet: ${selectedPetData?.name}\nData: ${formattedDate}\nHorário: ${selectedTime}${
        specialCare ? `\nCuidados especiais: ${specialCare}` : ""
      }`,
    )
  }

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
        <div className="text-center">
          <p className="text-lg text-[#540804]">
            Bem-vindo, <span className="font-semibold">{user.name}</span>!
          </p>
        </div>

        {/* Service Card */}
        <div className="bg-white rounded-lg p-4 flex gap-4">
          <img src="/dog-grooming.png" alt="Banho simples" className="w-20 h-20 rounded-lg object-cover" />
          <div>
            <h3 className="font-semibold text-[#540804]">Banho simples</h3>
            <p className="text-sm text-[#2d0909]">Valor referente ao porte</p>
          </div>
        </div>

        {/* Date Display */}
        <div className="text-center space-y-3">
          <p className="text-[#540804] font-medium">Selecione o dia disponível</p>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[250px] justify-center bg-white border border-[#d4a373] text-[#540804] hover:bg-[#e9edc9]",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date
                  ? date.toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                  : "Selecione uma data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white rounded-lg border border-[#d4a373]" align="center">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        {/* Pet Selection */}
        <div>
          <h3 className="font-semibold text-[#540804] mb-3">Selecione seu PET</h3>
          <div className="flex gap-4 flex-wrap">
            {displayPets.map((pet) => (
              <button
                key={pet.id}
                onClick={() => setSelectedPet(pet.id)}
                className={`flex flex-col items-center gap-2 ${
                  selectedPet === pet.id ? "opacity-100" : "opacity-60"
                }`}
              >
                {pet.image ? (
                  <img
                    src={pet.image || "/placeholder.svg"}
                    alt={pet.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#d4a373]"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#d4a373] flex items-center justify-center text-2xl text-[#d4a373]">
                    +
                  </div>
                )}
                <span className="text-sm text-[#540804]">{pet.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="font-semibold text-[#540804] mb-3">Horários disponíveis</h3>
          <div className="space-y-2">
            {timeSlots.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 gap-2">
                {row.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 rounded text-sm font-medium ${
                      selectedTime === time
                        ? "bg-[#d4a373] text-white"
                        : "bg-white text-[#540804] hover:bg-[#e9edc9]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Cuidados especiais */}
        <div>
          <label className="block text-sm text-[#540804] mb-2">Algum cuidado especial com o pet?</label>
          <input
            type="text"
            value={specialCare}
            onChange={(e) => setSpecialCare(e.target.value)}
            placeholder="Ex: Alergia a produtos com perfume"
            className="w-full px-4 py-2 rounded bg-white border border-[#d4a373] text-[#540804] placeholder:text-[#2d0909]/50"
          />
        </div>

        {/* Confirm Button */}
        <Button
          onClick={handleConfirmBooking}
          className="w-full bg-[#fff] hover:bg-[#2d0909] text-black py-6 text-base"
        >
          Confirmar Agendamento
        </Button>
      </div>
    </div>
  )
}

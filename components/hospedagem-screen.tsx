"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { mockPets } from "@/lib/mock-data"

interface HospedagemScreenProps {
  onBack: () => void
}

export function HospedagemScreen({ onBack }: HospedagemScreenProps) {
  const [selectedPet, setSelectedPet] = useState<string>("")
  const [checkIn, setCheckIn] = useState<string>("")
  const [checkOut, setCheckOut] = useState<string>("")

  // Calculate number of days and total price
  const calculateTotal = () => {
    if (!checkIn || !checkOut || !selectedPet) return 0

    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

    if (days <= 0) return 0

    const pet = mockPets.find((p) => p.id === selectedPet)
    if (!pet) return 0

    const pricePerDay = pet.size === "pequeno" ? 50 : pet.size === "médio" ? 70 : 90

    return days * pricePerDay
  }

  const total = calculateTotal()
  const days =
    checkIn && checkOut
      ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
      : 0

  const handleConfirm = () => {
    if (selectedPet && checkIn && checkOut && total > 0) {
      const pet = mockPets.find((p) => p.id === selectedPet)
      alert(
        `Hospedagem confirmada!\n\nPet: ${pet?.name}\nCheck-in: ${new Date(checkIn).toLocaleDateString("pt-BR")}\nCheck-out: ${new Date(checkOut).toLocaleDateString("pt-BR")}\nDiárias: ${days}\nTotal: R$ ${total.toFixed(2)}`,
      )
      onBack()
    }
  }

  return (
    <div className="min-h-full bg-[#fefae0]">
      {/* Header */}
      <div className="bg-[#0a4d8c] text-white p-4 flex items-center gap-4">
        <button onClick={onBack} className="hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Confirmar Hospedagem</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Pet Selection */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#0a4d8c] mb-4">Selecione o Pet</h2>
          <select
            value={selectedPet}
            onChange={(e) => setSelectedPet(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#1d6fb8]"
          >
            <option value="">Escolha um pet</option>
            {mockPets.map((pet) => (
              <option key={pet.id} value={pet.id}>
                {pet.name} - {pet.breed} ({pet.size})
              </option>
            ))}
          </select>

          {selectedPet && (
            <div className="mt-4 p-4 bg-[#f0f7ff] rounded-lg">
              {(() => {
                const pet = mockPets.find((p) => p.id === selectedPet)
                return (
                  <div className="flex items-center gap-4">
                    <img
                      src={pet?.image || "/placeholder.svg"}
                      alt={pet?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#0a4d8c]">{pet?.name}</p>
                      <p className="text-sm text-gray-600">
                        {pet?.breed} • {pet?.age} • {pet?.size}
                      </p>
                    </div>
                  </div>
                )
              })()}
            </div>
          )}
        </div>

        {/* Date Selection */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#0a4d8c] mb-4">Período da Hospedagem</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#1d6fb8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#1d6fb8]"
              />
            </div>
          </div>
        </div>

        {/* Price Summary */}
        {total > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#0a4d8c] mb-4">Resumo do Valor</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Diárias:</span>
                <span className="font-medium">
                  {days} {days === 1 ? "dia" : "dias"}
                </span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Valor por diária:</span>
                <span className="font-medium">
                  R$ {(() => {
                    const pet = mockPets.find((p) => p.id === selectedPet)
                    const pricePerDay = pet?.size === "pequeno" ? 50 : pet?.size === "médio" ? 70 : 90
                    return pricePerDay.toFixed(2)
                  })()}
                </span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between text-xl font-bold text-[#1d6fb8]">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Confirm Button */}
        <Button
          onClick={handleConfirm}
          disabled={!selectedPet || !checkIn || !checkOut || total <= 0}
          className="w-full bg-[#1d6fb8] hover:bg-[#0a4d8c] text-white py-6 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirmar Hospedagem
        </Button>
      </div>
    </div>
  )
}

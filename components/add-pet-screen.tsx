"use client"

import type React from "react"

import { ChevronLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface AddPetScreenProps {
  onBack: () => void
  onSave: () => void
}

export function AddPetScreen({ onBack, onSave }: AddPetScreenProps) {
  const [petImage, setPetImage] = useState<string>("")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPetImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-[#fefae0]">
      {/* Header */}
      <header className="bg-[#540804] text-white p-4 flex items-center gap-3">
        <button onClick={onBack} className="hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Adicionar PET</h1>
      </header>

      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
          {/* Photo Upload */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center border-2 border-dashed border-[#d4a373]">
              {petImage ? (
                <img src={petImage || "/placeholder.svg"} alt="Pet" className="w-full h-full object-cover" />
              ) : (
                <Upload className="w-8 h-8 text-gray-400" />
              )}
            </div>
            <Label htmlFor="pet-photo" className="cursor-pointer">
              <div className="bg-[#d4a373] hover:bg-[#c49363] text-white px-6 py-2 rounded-full text-sm">
                Adicionar foto
              </div>
              <Input id="pet-photo" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </Label>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="pet-name" className="text-[#540804] font-medium">
                Nome do PET
              </Label>
              <Input
                id="pet-name"
                placeholder="Digite o nome"
                className="mt-1 border-gray-300 focus:border-[#d4a373] focus:ring-[#d4a373]"
              />
            </div>

            <div>
              <Label htmlFor="pet-species" className="text-[#540804] font-medium">
                Espécie
              </Label>
              <select
                id="pet-species"
                className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#d4a373] focus:outline-none focus:ring-1 focus:ring-[#d4a373]"
              >
                <option value="">Selecione</option>
                <option value="dog">Cachorro</option>
                <option value="cat">Gato</option>
              </select>
            </div>

            <div>
              <Label htmlFor="pet-breed" className="text-[#540804] font-medium">
                Raça
              </Label>
              <Input
                id="pet-breed"
                placeholder="Digite a raça"
                className="mt-1 border-gray-300 focus:border-[#d4a373] focus:ring-[#d4a373]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pet-age" className="text-[#540804] font-medium">
                  Idade
                </Label>
                <Input
                  id="pet-age"
                  type="number"
                  placeholder="Anos"
                  className="mt-1 border-gray-300 focus:border-[#d4a373] focus:ring-[#d4a373]"
                />
              </div>

              <div>
                <Label htmlFor="pet-size" className="text-[#540804] font-medium">
                  Porte
                </Label>
                <select
                  id="pet-size"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#d4a373] focus:outline-none focus:ring-1 focus:ring-[#d4a373]"
                >
                  <option value="">Selecione</option>
                  <option value="pequeno">Pequeno</option>
                  <option value="médio">Médio</option>
                  <option value="grande">Grande</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="pet-weight" className="text-[#540804] font-medium">
                Peso (kg)
              </Label>
              <Input
                id="pet-weight"
                type="number"
                step="0.1"
                placeholder="Digite o peso"
                className="mt-1 border-gray-300 focus:border-[#d4a373] focus:ring-[#d4a373]"
              />
            </div>

            <div>
              <Label htmlFor="pet-notes" className="text-[#540804] font-medium">
                Observações
              </Label>
              <textarea
                id="pet-notes"
                placeholder="Informações adicionais sobre o pet..."
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#d4a373] focus:outline-none focus:ring-1 focus:ring-[#d4a373]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={onBack}
              variant="outline"
              className="flex-1 border-[#540804] text-[#540804] hover:bg-[#fefae0] bg-transparent"
            >
              Cancelar
            </Button>
            <Button onClick={onSave} className="flex-1 bg-[#d4a373] hover:bg-[#c49363] text-white">
              Salvar PET
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

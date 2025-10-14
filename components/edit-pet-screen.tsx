"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Pet } from "@/lib/mock-data"
import "./ui/home.css"

interface EditPetScreenProps {
  onBack: () => void
  pet: Pet
}

export function EditPetScreen({ onBack, pet }: EditPetScreenProps) {
  const [formData, setFormData] = useState({
    name: pet.name,
    species: pet.species,
    breed: pet.breed,
    age: pet.age.toString(),
    size: pet.size,
  })
  const [previewImage, setPreviewImage] = useState(pet.image)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Pet ${formData.name} atualizado com sucesso!`)
    onBack()
  }

  return (
    <div className="min-h-full bg-[#1d6fb8] pb-8">
      <div className="voltar">
        <button onClick={onBack} className="flex items-center gap-2 text-white">
          <ChevronLeft className="w-6 h-6" />
          <span className="text-base">Voltar</span>
        </button>
      </div>

      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Editar PET</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-white border-4 border-white shadow-lg">
              {previewImage ? (
                <>
                  <img src={previewImage || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setPreviewImage("")}
                    className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>

            <label className="cursor-pointer">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <span className="bg-white text-[#0a4d8c] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 inline-block">
                Alterar Foto
              </span>
            </label>
          </div>

          {/* Form Fields */}
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div>
              <Label htmlFor="name" className="text-[#0a4d8c] font-semibold">
                Nome do PET
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 border-[#0a4d8c]"
                required
              />
            </div>

            <div>
              <Label htmlFor="species" className="text-[#0a4d8c] font-semibold">
                Espécie
              </Label>
              <Select
                value={formData.species}
                onValueChange={(value: "dog" | "cat") => setFormData({ ...formData, species: value })}
              >
                <SelectTrigger className="mt-1 border-[#0a4d8c]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dog">Cachorro</SelectItem>
                  <SelectItem value="cat">Gato</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="breed" className="text-[#0a4d8c] font-semibold">
                Raça
              </Label>
              <Input
                id="breed"
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                className="mt-1 border-[#0a4d8c]"
                required
              />
            </div>

            <div>
              <Label htmlFor="age" className="text-[#0a4d8c] font-semibold">
                Idade (anos)
              </Label>
              <Input
                id="age"
                type="number"
                min="0"
                max="30"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="mt-1 border-[#0a4d8c]"
                required
              />
            </div>

            <div>
              <Label htmlFor="size" className="text-[#0a4d8c] font-semibold">
                Porte
              </Label>
              <Select
                value={formData.size}
                onValueChange={(value: "pequeno" | "médio" | "grande") => setFormData({ ...formData, size: value })}
              >
                <SelectTrigger className="mt-1 border-[#0a4d8c]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pequeno">Pequeno</SelectItem>
                  <SelectItem value="médio">Médio</SelectItem>
                  <SelectItem value="grande">Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-white hover:bg-gray-100 text-[#0a4d8c] py-6 text-base font-semibold"
          >
            Salvar Alterações
          </Button>
        </form>
      </div>
    </div>
  )
}

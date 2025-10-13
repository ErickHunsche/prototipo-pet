"use client"

import { ChevronLeft, User, Mail, Phone, Calendar, FileText, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { User as UserType, Pet } from "@/lib/mock-data"

interface ProfileScreenProps {
  onBack: () => void
  onAddPet?: () => void
  user: UserType
  pets: Pet[]
}

export function ProfileScreen({ onBack, onAddPet, user, pets }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-[#fefae0]">
      {/* Header */}
      <header className="bg-[#540804] text-white p-4 flex items-center gap-3">
        <button onClick={onBack} className="hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Meu Perfil</h1>
      </header>

      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* User Information Card */}
        <Card className="bg-white border-none shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#540804]">Informações Pessoais</h2>
              <Button variant="ghost" size="icon" className="text-[#540804] hover:bg-[#fefae0]">
                <Edit2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-[#d4a373] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Nome completo</p>
                  <p className="font-medium text-gray-900">{user.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d4a373] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <p className="font-medium text-gray-900">{user.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#d4a373] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Telefone</p>
                  <p className="font-medium text-gray-900">{user.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#d4a373] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Data de nascimento</p>
                  <p className="font-medium text-gray-900">{user.birthDate}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#d4a373] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">CPF</p>
                  <p className="font-medium text-gray-900">{user.cpf}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Pets Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#540804]">Meus PETs</h2>
            <Button onClick={onAddPet} className="bg-[#d4a373] hover:bg-[#c49363] text-white rounded-full px-6">
              Adicionar PET
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {pets.map((pet) => (
              <Card key={pet.id} className="bg-white border-none shadow-sm overflow-hidden">
                <div className="flex gap-4 p-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={pet.image || "/placeholder.svg"} alt={pet.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-[#540804]">{pet.name}</h3>
                      <Button variant="ghost" size="icon" className="text-[#540804] hover:bg-[#fefae0] -mt-2 -mr-2">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">
                        <span className="font-medium">Espécie:</span> {pet.species === "dog" ? "Cachorro" : "Gato"}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Raça:</span> {pet.breed}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Idade:</span> {pet.age} {pet.age === 1 ? "ano" : "anos"}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Porte:</span>{" "}
                        {pet.size.charAt(0).toUpperCase() + pet.size.slice(1)}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

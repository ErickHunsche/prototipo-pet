"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface PetRegisterScreenProps {
  onBack: () => void
  onNext: () => void
}

export function PetRegisterScreen({ onBack, onNext }: PetRegisterScreenProps) {
  return (
    <div className="min-h-screen bg-[#fefae0]">
      {/* Header */}
      <div className="bg-[#540804] text-white p-4 flex items-center gap-3">
        <button onClick={onBack}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-base">Voltar</span>
      </div>

      <div className="p-6">
        {/* Form Title */}
        <h2 className="text-lg font-semibold text-[#540804] mb-6">Cadastro seu PET</h2>

        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
          />
          <Input
            type="text"
            placeholder="Digite o nome"
            className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
          />
          <Input
            type="text"
            placeholder="Digite a idade"
            className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
          />
          <Input
            type="password"
            placeholder="Confirme sua senha"
            className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
          />
          <Input
            type="text"
            placeholder="Data de nascimento"
            className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
          />
          <Input
            type="tel"
            placeholder="Digite seu telefone"
            className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
          />
          <Input
            type="text"
            placeholder="Data de nascimento"
            className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
          />

          <div className="space-y-2">
            <p className="text-sm text-[#2d0909]">Necessita algum cuidado especial?</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="special-care" className="accent-[#d4a373]" />
                <span className="text-sm text-[#540804]">Sim</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="special-care" className="accent-[#d4a373]" />
                <span className="text-sm text-[#540804]">Não</span>
              </label>
            </div>
          </div>

          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Selecione o porte"
              className="flex-1 bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
            />
            <Button className="bg-[#d4a373] hover:bg-[#d4a373]/90 text-white px-6">▼</Button>
          </div>

          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Selecione a raça"
              className="flex-1 bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
            />
            <Button className="bg-[#d4a373] hover:bg-[#d4a373]/90 text-white px-6">▼</Button>
          </div>

          <Button onClick={onNext} className="w-full bg-[#d4a373] hover:bg-[#d4a373]/90 text-white py-6 text-base mt-6">
            CADASTRO
          </Button>
        </div>
      </div>
    </div>
  )
}

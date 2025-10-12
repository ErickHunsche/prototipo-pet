"use client"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface RegisterScreenProps {
  onBack: () => void
  onNext: () => void
}

export function RegisterScreen({ onBack, onNext }: RegisterScreenProps) {
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
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#540804] mb-2">Bem-vindo ao Centro-PET</h1>
          <p className="text-[#2d0909]">Realize seu cadastro</p>
        </div>

        {/* Registration Form */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-[#540804]">Realize seu cadastro</h2>

          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
            />
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
            />
            <Input
              type="password"
              placeholder="Digite sua senha"
              className="bg-white border-[#d9d9d9] text-[#540804] placeholder:text-[#2d0909]/50"
            />
          </div>

          <div className="text-center">
            <Button className="bg-[#d4a373] hover:bg-[#d4a373]/90 text-white px-8 py-2">ENTRAR</Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#2d0909]">Esqueceu sua senha?</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#2d0909]">
              Faça seu <span className="bg-[#d4a373] text-white px-3 py-1 rounded">CADASTRO</span>
            </p>
          </div>

          <Button onClick={onNext} className="w-full bg-[#d4a373] hover:bg-[#d4a373]/90 text-white py-6 text-base">
            CADASTRO
          </Button>
        </div>
      </div>
    </div>
  )
}

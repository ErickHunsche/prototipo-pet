"use client"

import { Phone, MapPin, Share2, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HomeScreenProps {
  onNavigate: () => void
  onProfile?: () => void
}

export function HomeScreen({ onNavigate, onProfile }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#ccd5ae] flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <img src="/cute-pets-with-flowers.jpg" alt="Pets with flowers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ccd5ae]/50" />

        {/* Logo Badge */}
        <div className="absolute top-4 left-4 bg-[#540804] text-white px-4 py-2 rounded-md">
          <div className="text-xs">OCABERTO</div>
          <div className="text-lg font-bold">Centro-PET</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-8 py-6 bg-[#ccd5ae]">
        <button className="flex flex-col items-center gap-2 text-[#540804]">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-xs">Ligar</span>
        </button>
        <button className="flex flex-col items-center gap-2 text-[#540804]">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-xs">Visitar</span>
        </button>
        <button className="flex flex-col items-center gap-2 text-[#540804]">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Share2 className="w-5 h-5" />
          </div>
          <span className="text-xs">Compartilhar</span>
        </button>
        <button
          onClick={onProfile}
          className="flex flex-col items-center gap-2 text-[#540804] hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <span className="text-xs">Perfil</span>
        </button>
      </div>

      {/* Services List */}
      <div className="flex-1 bg-[#fefae0] p-6">
        <h2 className="text-lg font-semibold mb-4 text-[#540804]">Selecione os serviços desejados</h2>

        <div className="space-y-3">
          <ServiceItem image="/dog-grooming.png" title="Banho simples" subtitle="Valor referente ao porte" />
          <ServiceItem
            image="/dog-bath-hygiene.jpg"
            title="Banho e Tosa higiênica"
            subtitle="Valor referente ao porte"
          />
          <ServiceItem image="/pet-grooming.png" title="Tosagem" subtitle="Valor referente ao porte" />
          <ServiceItem image="/pet-nail-trimming.png" title="Corte de unhas" subtitle="Valor referente ao porte" />
        </div>

        <Button onClick={onNavigate} className="w-full mt-6 bg-[#540804] hover:bg-[#2d0909] text-white py-6 text-base">
          Confirmar serviço
        </Button>
      </div>
    </div>
  )
}

function ServiceItem({ image, title, subtitle }: { image: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-4 bg-white p-3 rounded-lg">
      <img src={image || "/placeholder.svg"} alt={title} className="w-16 h-16 rounded-lg object-cover" />
      <div className="flex-1">
        <h3 className="font-semibold text-[#540804]">{title}</h3>
        <p className="text-sm text-[#2d0909]">{subtitle}</p>
      </div>
      <input type="checkbox" className="w-5 h-5 accent-[#d4a373]" />
    </div>
  )
}

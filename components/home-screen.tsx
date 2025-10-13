"use client"

import { Phone, MapPin, Share2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import "./ui/home.css"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface HomeScreenProps {
  onNavigate: () => void
  onProfile?: () => void
}

export function HomeScreen({ onNavigate, onProfile }: HomeScreenProps) {
  const handleCall = () => {
    window.location.href = "tel:+5511987654321"
  }

  const handleVisit = () => {
    window.open("https://maps.google.com/?q=Rua+das+Flores+123+São+Paulo+SP", "_blank")
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Centro-PET",
        text: "Confira o Centro-PET - Cuidados especiais para seu pet!",
        url: window.location.href,
      })
    } else {
      alert("Centro-PET\nRua das Flores, 123 - São Paulo, SP\nTelefone: (11) 98765-4321")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <img src="/home.png" alt="Pets with flowers" className="w-full h-full object-cover" />

        {/* Logo Badge */}
        <div className="absolute top-4 left-4 bg-[#d4a373] text-white px-4 py-2 rounded-md">
          <div className="text-xs">ABERTO</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-bar">
        <div className="left-actions">
          <button onClick={handleCall} className="flex flex-col items-center gap-1 text-[#000000]">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#fff]">Ligar</span>
          </button>
          <button onClick={handleVisit} className="flex flex-col items-center gap-1 text-[#000000]">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#fff]">Visitar</span>
          </button>
          <button onClick={handleShare} className="flex flex-col items-center gap-1 text-[#000000]">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#fff]">Compart..</span>
          </button>
        </div>
        <button
          onClick={onProfile}
          className="flex flex-col items-center gap-1 text-[#000000] hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <span className="text-xs text-[#fff]">Perfil</span>
        </button>
      </div>

      {/* Services List */}
      <div className="flex-1 bg-[#1d6fb8] p-6">
        <h2>Selecione os serviço desejado</h2>

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

        <Button onClick={onNavigate} className="w-full mt-6 bg-[#fff] hover:bg-[#2d0909] text-black py-6 text-base">
          Confirmar serviço
        </Button>
      </div>
    </div>
  )
}

function ServiceItem({
  image,
  title,
  subtitle,
}: {
  image: string
  title: string
  subtitle: string
}) {
  const [checked, setChecked] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-lg cursor-pointer" onClick={() => setChecked(!checked)}>
      {/* Efeito circular */}
      <AnimatePresence>
        {checked && (
          <motion.span
            key="ripple"
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 6, opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 bg-[#d4a373] rounded-full w-8 h-8 m-auto"
          />
        )}
      </AnimatePresence>

      {/* Conteúdo principal do card */}
      <div
        className={`flex items-center justify-between gap-4 p-4 relative z-10 transition-colors duration-200 ${
          checked ? "bg-[#d4a373]/30" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-4 flex-1">
          <img src={image || "/placeholder.svg"} alt={title} className="w-16 h-16 rounded-lg object-cover" />
          <div>
            <h3 className="font-semibold text-[#000000]">{title}</h3>
            <p className="text-sm text-[#000000]">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowDetails(!showDetails)
            }}
            className="text-sm text-[#1d6fb8] hover:text-[#134f84] underline"
          >
            Ver detalhes
          </button>

          <input
            type="checkbox"
            className="w-5 h-5 accent-[#d4a373]"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>

      {/* Área de detalhes expandida */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#fdf7f0] text-[#2d0909] text-sm p-4 rounded-b-lg border-t border-[#d4a373]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-semibold mb-2">Valores por porte:</p>
            <ul className="space-y-1">
              <li>Porte pequeno: R$ 30,00</li>
              <li>Porte médio: R$ 45,00</li>
              <li>Porte grande: R$ 60,00</li>
            </ul>

            <Button onClick={() => setShowDetails(false)} className="mt-3 bg-[#1d6fb8] text-white hover:bg-[#134f84]">
              Fechar
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

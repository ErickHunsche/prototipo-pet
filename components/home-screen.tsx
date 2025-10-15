"use client"

import { Phone, MapPin, Share2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import "./ui/home.css"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface HomeScreenProps {
  onNavigate: () => void
  onNavigateHospedagem: () => void
  onProfile?: () => void
}

type Section = "servicos" | "hospedagem"

export function HomeScreen({ onNavigate, onNavigateHospedagem, onProfile }: HomeScreenProps) {
  const [activeSection, setActiveSection] = useState<Section>("servicos")

  const handleCall = () => {
    window.location.href = "tel:+5511987654321"
  }

  const handleVisit = () => {
    window.open(
      "https://www.google.com/maps/place/Roca+Sales/@-29.2859196,-51.8849486,17z/data=!3m1!4b1!4m6!3m5!1s0x951c5dd2615eae25:0x732655975902bf0a!8m2!3d-29.2859243!4d-51.8823737!16s%2Fg%2F11sy40msn5?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
      "_blank",
    )
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Centro-PET",
        text: "Confira o Centro-PET - Cuidados especiais para seu pet!",
        url: window.location.href,
      })
    } else {
      alert("Centro-PET\nRua das Flores, 123 - São Paulo, SP\nTelefone: (51) 99912-9161")
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

      {/* Section Buttons */}
      <div className="bg-[#1d6fb8] px-6 pt-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveSection("servicos")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all ${
              activeSection === "servicos"
                ? "bg-white text-[#1d6fb8] shadow-md"
                : "bg-[#0a4d8c] text-white hover:bg-[#134f84]"
            }`}
          >
            <img src="/dog.svg" alt="Serviços" className="w-5 h-5" />
            <span className="font-medium">Serviços</span>
          </button>
          <button
            onClick={() => setActiveSection("hospedagem")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all ${
              activeSection === "hospedagem"
                ? "bg-white text-[#1d6fb8] shadow-md"
                : "bg-[#0a4d8c] text-white hover:bg-[#134f84]"
            }`}
          >
            <img src="/casinha.svg" alt="Hospedagem" className="w-5 h-5" />
            <span className="font-medium">Hospedagem</span>
          </button>
        </div>
      </div>

      <div className="flex-1 bg-[#1d6fb8] px-6 pb-6 flex flex-col">
        {activeSection === "servicos" ? (
          <ServicesSection onNavigate={onNavigate} />
        ) : (
          <LodgingSection onNavigate={onNavigateHospedagem} />
        )}
      </div>
    </div>
  )
}

function ServicesSection({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      <h2 className="mb-4">Selecione os serviço desejado</h2>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        <ServiceItem image="/golden-retriever.jpg" title="Banho simples" subtitle="Valor referente ao porte" />
        <ServiceItem image="/majestic-husky.jpg" title="Banho e Tosa higiênica" subtitle="Valor referente ao porte" />
        <ServiceItem image="/brown-dog.jpg" title="Tosagem" subtitle="Valor referente ao porte" />
        <ServiceItem image="/golden-retriever.jpg" title="Corte de unhas" subtitle="Valor referente ao porte" />
        <ServiceItem image="/majestic-husky.jpg" title="Banho medicinal" subtitle="Com produtos especiais" />
        <ServiceItem image="/brown-dog.jpg" title="Tosa bebê" subtitle="Corte delicado para filhotes" />
        <ServiceItem image="/golden-retriever.jpg" title="Hidratação" subtitle="Tratamento para pelos" />
        <ServiceItem image="/majestic-husky.jpg" title="Limpeza de ouvidos" subtitle="Higiene completa" />
        <ServiceItem image="/brown-dog.jpg" title="Escovação de dentes" subtitle="Saúde bucal" />
        <ServiceItem image="/golden-retriever.jpg" title="Spa completo" subtitle="Dia de beleza para seu pet" />
      </div>

      <Button onClick={onNavigate} className="w-full bg-[#fff] hover:bg-[#2d0909] text-black py-6 text-base">
        Confirmar serviço
      </Button>
    </>
  )
}

function LodgingSection({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      <h2 className="mb-4">Selecione a hospedagem desejada</h2>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        <LodgingItem
          image="/golden-retriever.jpg"
          title="Hospedagem comum"
          subtitle="Acomodação confortável com alimentação"
          availability="Disponível"
        />
        <LodgingItem
          image="/majestic-husky.jpg"
          title="Hospedagem com passeio"
          subtitle="Inclui 2 passeios diários"
          availability="Disponível"
        />
        <LodgingItem
          image="/brown-dog.jpg"
          title="Hospedagem premium"
          subtitle="Suíte individual com câmera"
          availability="Disponível"
        />
        <LodgingItem
          image="/golden-retriever.jpg"
          title="Hospedagem day care"
          subtitle="Período diurno com atividades"
          availability="Disponível"
        />
        <LodgingItem
          image="/majestic-husky.jpg"
          title="Hospedagem com banho"
          subtitle="Inclui banho ao final da estadia"
          availability="Lotado"
        />
      </div>

      <Button onClick={onNavigate} className="w-full bg-[#fff] hover:bg-[#2d0909] text-black py-6 text-base">
        Confirmar hospedagem
      </Button>
    </>
  )
}

function ServiceItem({ image, title, subtitle }: { image: string; title: string; subtitle: string }) {
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

function LodgingItem({
  image,
  title,
  subtitle,
  availability,
}: {
  image: string
  title: string
  subtitle: string
  availability: string
}) {
  const [checked, setChecked] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const isAvailable = availability === "Disponível"

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer"
      onClick={() => isAvailable && setChecked(!checked)}
    >
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
          checked ? "bg-[#d4a373]/30" : isAvailable ? "bg-white" : "bg-gray-200"
        }`}
      >
        <div className="flex items-center gap-4 flex-1">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={`w-16 h-16 rounded-lg object-cover ${!isAvailable && "opacity-50"}`}
          />
          <div>
            <h3 className={`font-semibold ${isAvailable ? "text-[#000000]" : "text-gray-500"}`}>{title}</h3>
            <p className={`text-sm ${isAvailable ? "text-[#000000]" : "text-gray-500"}`}>{subtitle}</p>
            <span className={`text-xs font-medium ${isAvailable ? "text-green-600" : "text-red-600"}`}>
              {availability}
            </span>
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
            disabled={!isAvailable}
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
            <p className="font-semibold mb-2">Valores por diária (porte):</p>
            <ul className="space-y-1">
              <li>Porte pequeno: R$ 50,00/dia</li>
              <li>Porte médio: R$ 70,00/dia</li>
              <li>Porte grande: R$ 90,00/dia</li>
            </ul>
            <p className="mt-3 text-xs text-gray-600">
              Inclui alimentação, água fresca, área de recreação e monitoramento 24h.
            </p>

            <Button onClick={() => setShowDetails(false)} className="mt-3 bg-[#1d6fb8] text-white hover:bg-[#134f84]">
              Fechar
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

"use client"

import { useState } from "react"
import { HomeScreen } from "@/components/home-screen"
import { ServicesScreen } from "@/components/services-screen"
import { RegisterScreen } from "@/components/register-screen"
import { PetRegisterScreen } from "@/components/pet-register-screen"
import { PetSelectionScreen } from "@/components/pet-selection-screen"
import { ProfileScreen } from "@/components/profile-screen"
import { AddPetScreen } from "@/components/add-pet-screen"
import { EditPetScreen } from "@/components/edit-pet-screen"
import { HospedagemScreen } from "@/components/hospedagem-screen"
import { mockUser, mockPets } from "@/lib/mock-data"
import { AnimatePresence, motion } from "framer-motion"

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<
    | "home"
    | "services"
    | "register"
    | "pet-register"
    | "pet-selection"
    | "profile"
    | "add-pet"
    | "edit-pet"
    | "hospedagem"
  >("home")
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [currentUser, setCurrentUser] = useState(mockUser)
  const [userPets, setUserPets] = useState(mockPets)
  const [editingPetId, setEditingPetId] = useState<string | null>(null)

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: "100%",
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: "100%",
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  }

  const handleEditPet = (petId: string) => {
    setEditingPetId(petId)
    setCurrentScreen("edit-pet")
  }

  return (
    <div className="min-h-screen bg-[#fefae0] relative overflow-hidden">
      {/* Home screen always rendered as base */}
      <HomeScreen
        onNavigate={() => setCurrentScreen("pet-selection")}
        onNavigateHospedagem={() => setCurrentScreen("hospedagem")}
        onProfile={() => setCurrentScreen("profile")}
      />

      <AnimatePresence>
        {currentScreen === "services" && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#fefae0] overflow-y-auto"
          >
            <ServicesScreen
              onBack={() => setCurrentScreen("home")}
              onNext={() => {
                if (isLoggedIn) {
                  setCurrentScreen("pet-selection")
                } else {
                  setCurrentScreen("register")
                }
              }}
            />
          </motion.div>
        )}

        {currentScreen === "hospedagem" && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#fefae0] overflow-y-auto"
          >
            <HospedagemScreen onBack={() => setCurrentScreen("home")} />
          </motion.div>
        )}

        {currentScreen === "register" && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#fefae0] overflow-y-auto"
          >
            <RegisterScreen
              onBack={() => setCurrentScreen("services")}
              onNext={() => setCurrentScreen("pet-register")}
            />
          </motion.div>
        )}

        {currentScreen === "pet-register" && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#fefae0] overflow-y-auto"
          >
            <PetRegisterScreen
              onBack={() => setCurrentScreen("register")}
              onNext={() => setCurrentScreen("pet-selection")}
            />
          </motion.div>
        )}

        {currentScreen === "pet-selection" && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#fefae0] overflow-y-auto"
          >
            <PetSelectionScreen
              onBack={() => setCurrentScreen("home")}
              onAddPet={() => setCurrentScreen("add-pet")}
              user={currentUser}
              pets={userPets}
            />
          </motion.div>
        )}

        {currentScreen === "profile" && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#fefae0] overflow-y-auto"
          >
            <ProfileScreen
              onBack={() => setCurrentScreen("home")}
              onAddPet={() => setCurrentScreen("add-pet")}
              onEditPet={handleEditPet}
              user={currentUser}
              pets={userPets}
            />
          </motion.div>
        )}

        {currentScreen === "add-pet" && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#fefae0] overflow-y-auto"
          >
            <AddPetScreen
              onBack={() => setCurrentScreen("profile")}
              onSave={() => {
                alert("PET salvo com sucesso!")
                setCurrentScreen("profile")
              }}
            />
          </motion.div>
        )}

        {currentScreen === "edit-pet" && editingPetId && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#fefae0] overflow-y-auto"
          >
            <EditPetScreen
              onBack={() => setCurrentScreen("profile")}
              pet={userPets.find((p) => p.id === editingPetId)!}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

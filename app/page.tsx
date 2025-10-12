"use client"

import { useState } from "react"
import { HomeScreen } from "@/components/home-screen"
import { ServicesScreen } from "@/components/services-screen"
import { RegisterScreen } from "@/components/register-screen"
import { PetRegisterScreen } from "@/components/pet-register-screen"
import { PetSelectionScreen } from "@/components/pet-selection-screen"
import { ProfileScreen } from "@/components/profile-screen"
import { mockUser, mockPets } from "@/lib/mock-data"

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<
    "home" | "services" | "register" | "pet-register" | "pet-selection" | "profile"
  >("home")
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [currentUser, setCurrentUser] = useState(mockUser)
  const [userPets, setUserPets] = useState(mockPets)

  return (
    <div className="min-h-screen bg-[#fefae0]">
      {currentScreen === "home" && (
        <HomeScreen onNavigate={() => setCurrentScreen("services")} onProfile={() => setCurrentScreen("profile")} />
      )}
      {currentScreen === "services" && (
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
      )}
      {currentScreen === "register" && (
        <RegisterScreen onBack={() => setCurrentScreen("services")} onNext={() => setCurrentScreen("pet-register")} />
      )}
      {currentScreen === "pet-register" && (
        <PetRegisterScreen
          onBack={() => setCurrentScreen("register")}
          onNext={() => setCurrentScreen("pet-selection")}
        />
      )}
      {currentScreen === "pet-selection" && (
        <PetSelectionScreen onBack={() => setCurrentScreen("services")} user={currentUser} pets={userPets} />
      )}
      {currentScreen === "profile" && (
        <ProfileScreen onBack={() => setCurrentScreen("home")} user={currentUser} pets={userPets} />
      )}
    </div>
  )
}

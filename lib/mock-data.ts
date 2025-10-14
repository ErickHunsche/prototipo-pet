export interface User {
  id: string
  name: string
  email: string
  phone: string
  birthDate: string
  cpf: string
  image?: string
}

export interface Pet {
  id: string
  userId: string
  name: string
  species: "dog" | "cat"
  breed: string
  age: number
  size: "pequeno" | "médio" | "grande"
  image: string
}

export interface Booking {
  id: string
  userId: string
  petId: string
  serviceId: string
  date: string
  time: string
  specialCare?: string
}

// Pre-registered user
export const mockUser: User = {
  id: "user-1",
  name: "Maria Silva",
  email: "maria.silva@email.com",
  phone: "(11) 98765-4321",
  birthDate: "15/03/1990",
  cpf: "123.456.789-00",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qPvHgYE0FxwmcwdhygBHQb5lfswQpc.png",
}

// Pre-registered pets for the user
export const mockPets: Pet[] = [
  {
    id: "pet-1",
    userId: "user-1",
    name: "Biscuit",
    species: "dog",
    breed: "Golden Retriever",
    age: 3,
    size: "grande",
    image: "/golden-retriever.jpg",
  },
  {
    id: "pet-2",
    userId: "user-1",
    name: "Toska",
    species: "dog",
    breed: "Husky Siberiano",
    age: 2,
    size: "grande",
    image: "/majestic-husky.jpg",
  },
  {
    id: "pet-3",
    userId: "user-1",
    name: "Mel",
    species: "dog",
    breed: "Vira-lata",
    age: 5,
    size: "médio",
    image: "/brown-dog.jpg",
  },
]

// Mock bookings storage
export const mockBookings: Booking[] = []

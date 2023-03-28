import { User } from "firebase/auth"

export type IUserContext = {
    user: User | null,
    setUser: (user: User | null) => void
}
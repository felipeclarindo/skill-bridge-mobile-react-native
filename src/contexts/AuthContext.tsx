import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser, registerUser } from "../api/user";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextProps = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

// Context inicial undefined para checagem segura
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode; // <- garante que React entende children
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const storedUser = await AsyncStorage.getItem("@skillbridge:user");
      if (storedUser) setUser(JSON.parse(storedUser));
      setLoading(false);
    }
    loadUser();
  }, []);

  async function login(email: string, password: string) {
    try {
      const loggedUser = await loginUser(email, password);
      setUser(loggedUser);
      await AsyncStorage.setItem(
        "@skillbridge:user",
        JSON.stringify(loggedUser)
      );
      return true;
    } catch {
      return false;
    }
  }

  async function signup(name: string, email: string, password: string) {
    try {
      const newUser = await registerUser({ name, email, password });
      setUser(newUser);
      await AsyncStorage.setItem("@skillbridge:user", JSON.stringify(newUser));
      return true;
    } catch {
      return false;
    }
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem("@skillbridge:user");
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

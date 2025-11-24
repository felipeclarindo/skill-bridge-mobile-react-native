import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Mocked users
const mockUsers = [
  {
    id: "1",
    name: "Felipe Clarindo",
    email: "felipe@teste.com",
    password: "123456",
  },
];

// Mock login
async function mockLogin(email: string, password: string) {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  return new Promise<{ id: string; name: string; email: string }>(
    (resolve, reject) => {
      setTimeout(() => {
        if (!user) reject("Credenciais inválidas");
        else resolve({ id: user.id, name: user.name, email: user.email });
      }, 900);
    }
  );
}

// Mock signup
async function mockSignup(name: string, email: string, password: string) {
  return new Promise<{ id: string; name: string; email: string }>((resolve) => {
    setTimeout(() => {
      const newUser = {
        id: String(Date.now()),
        name,
        email,
      };
      mockUsers.push({ ...newUser, password });
      resolve(newUser);
    }, 900);
  });
}

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

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
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
      const loggedUser = await mockLogin(email, password);
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
      const newUser = await mockSignup(name, email, password);
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

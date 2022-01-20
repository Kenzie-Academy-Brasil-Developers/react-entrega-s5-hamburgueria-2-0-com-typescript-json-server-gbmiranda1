import { ReactNode } from "react";
import { AuthProvider } from "./Auth/AuthContext";
import { CartProvider } from "./Cart/CartContext";


interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  
  <AuthProvider>
    <CartProvider>
      {children}
    </CartProvider>
  </AuthProvider>
);

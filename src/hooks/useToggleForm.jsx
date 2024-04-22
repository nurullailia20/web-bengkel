import { createContext, useContext, useState } from "react";

const ToggleFormContext = createContext()
export const useToggleForm = () => {
  const context = useContext(ToggleFormContext);
  if (!context) {
    throw new Error("useToggleFOrm must be used within a ToggleProvider");
  }
  return context;
}
export const ToggleFormProvider =({children}) => {
  const [isRegister, setIsRegister] = useState(false)
  const toggleHandler = () => setIsRegister(state => !state)
  return (
    <ToggleFormContext.Provider value={{toggleHandler, isRegister}}>
      {children}
    </ToggleFormContext.Provider>
  )
}
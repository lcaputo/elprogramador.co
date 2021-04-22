import { createContext, useCallback, useContext, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";

export const ToastContext = createContext(null);

export const ToastWrapper = ({ children }) => {
  const addSuccessToast = useCallback((text) => {
    toast.success(text, { position: "top-center", autoClose: 2000 });
  }, []);

  const addErrorToast = useCallback((text) => {
    toast.error(text, { position: "top-center", autoClose: 2000 });
  }, []);

  //
  const values = useMemo(() => {
    return {
      addSuccessToast,
      addErrorToast,
    };
  }, []); // States que serán visibles en el contexto.

  return (
    <ToastContext.Provider value={values}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export function useToastContext() {
  const context = useContext(ToastContext);

  if (!context) {
    console.error("Error deploying Toast Context!!!");
  }

  return context;
}

export default useToastContext;

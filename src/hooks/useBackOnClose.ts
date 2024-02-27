import { useEffect, useCallback } from "react";

const useBackOnClose = (isOpen: boolean, onClose: () => void) => {
  const handlePopState = useCallback(() => {
    if (isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      // Push URL yang sama saat modal dibuka
      window.history.pushState(null, "", window.location.href);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      if (isOpen) {
        window.removeEventListener("popstate", handlePopState);
      }
    };
  }, [isOpen, onClose, handlePopState]);
};

export default useBackOnClose;

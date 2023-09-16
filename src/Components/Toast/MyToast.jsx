import React, { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

function CustomToaster(props) {
  const { toasts } = useToasterStore();
  const { limit = 3 } = props;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= limit)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <Toaster
      position="top right"
      {...props}
      toastOptions={{
        duration: 5000,
        style: {
          fontSize: "calc(15px + 0.2vw)",
        },
      }}
    />
  );
}

export default CustomToaster;

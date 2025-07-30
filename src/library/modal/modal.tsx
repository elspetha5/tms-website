import { PropsWithChildren } from "react";
import MaterialModal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

function Modal({ children, ...props }: PropsWithChildren<ModalProps>) {
  const { open, onClose } = props;

  return (
    <MaterialModal style={{ border: "none" }} open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "none",
          borderRadius: "5px",
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </MaterialModal>
  );
}

export default Modal;

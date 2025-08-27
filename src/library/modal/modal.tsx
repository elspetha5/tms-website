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
          width: "400",
          maxHeight: "80vh",
          bgcolor: "background.paper",
          border: "none",
          borderRadius: "5px",
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            padding: 4,
          }}
        >
          {children}
        </Box>
      </Box>
    </MaterialModal>
  );
}

export default Modal;

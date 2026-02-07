import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Modal.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment >
      <Button onClick={handleClickOpen} className={styles.button}>
        Give Feedback
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{textAlign: "center", fontWeight: "600" }}
          id="customized-dialog-title"
        >
          Feedback
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Full name"
              variant="outlined"
              color="success"
              fullWidth
            />

            <TextField
              label="Email ID"
              variant="outlined"
              color="success"
              fullWidth
            />

            <TextField
              label="Subject"
              variant="outlined"
              color="success"
              fullWidth
            />

            <TextField
              label="Description"
              variant="outlined"
              color="success"
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ display: "flex", justifyContent: "center", marginBottom:'1rem' }}>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              width: "30%",
              bgcolor: "#34c94b;",
              color: "#fff",
              borderRadius: "10px",
            }}
          >
            Save Feedback
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

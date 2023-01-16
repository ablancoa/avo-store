import React from 'react';
import { Modal, Button, Typography, Box } from '@mui/material';
import PDForder from '@components/MyOrder/PDForder.jsx';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Link from 'next/link';// import styles from './modal.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DownloadOrder = ({ cart, total, dataUser }) => {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>

      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Su orden ha sido realizada
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Por favor descargue su orden para cualquier inconveniente
          </Typography>
          <PDFDownloadLink document={<PDForder cart={cart} total={total} dataUser={dataUser} />} fileName="Orden.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download now!'
            }
          </PDFDownloadLink>
          <Link href='/'><Button>Regresar a la pagina principal</Button></Link>

        </Box>
      </Modal>
    </div>
  )
}

export default DownloadOrder;
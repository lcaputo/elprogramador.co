import React, { useEffect } from 'react'
import { makeStyles, Modal } from "@material-ui/core";
import { createPortal } from 'react-dom';


const useStyles  = makeStyles((theme) => ({
    modal: {
        position: "absolute",
        width: "60vh",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #363636",
        boxshadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: "48%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      },
}))

const CustomModal = ({isOpen, toggle, disableBackdropClick, children}) => {
    const classes = useStyles();
    const portal = document.createElement("div")

    useEffect(() => {
        document.body.appendChild(portal)
        return () => {
            portal.remove()
        }
    }, [portal])

    return createPortal((
        <Modal open={isOpen} onClose={toggle} disableBackdropClick={disableBackdropClick}>
            <div className={classes.modal}>
                {children}
            </div>
        </Modal>
    ), portal)
}

export default CustomModal
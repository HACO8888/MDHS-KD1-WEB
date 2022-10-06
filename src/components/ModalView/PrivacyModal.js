import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            Qui velit magna velit ipsum qui officia veniam excepteur aliqua sunt
            velit fugiat. Qui velit magna velit ipsum qui officia veniam
            excepteur aliqua sunt velit fugiat.Qui velit magna velit ipsum qui
            officia veniam excepteur aliqua sunt velit fugiat. Qui velit magna
            velit ipsum qui officia veniam excepteur aliqua sunt velit
            fugiat.Qui velit magna velit ipsum qui officia veniam excepteur
            aliqua sunt velit fugiat. Qui velit magna velit ipsum qui officia
            veniam excepteur aliqua sunt velit fugiat.Qui velit magna velit
            ipsum qui officia veniam excepteur aliqua sunt velit fugiat. Qui
            velit magna velit ipsum qui officia veniam excepteur aliqua sunt
            velit fugiat.
        </p>
    );
    return (
        
        <>
            <button className="item1" > { /*onClick={() => setOpen(true)} */ }
            沒有隱私權政策
            </button>
            {/* <Modal open={open} className="privacy" onClose={() => setOpen(false)} center >
                <h2 className="privacy">Privacy Policy</h2>
                <div className="privacy">沒有隱私權政策</div>
                {policyText}
                {policyText}
                {policyText}
            </Modal> */}
        </>
    );
};

export default PrivacyModal;
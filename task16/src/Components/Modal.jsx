import React  from "react";
import "./Modal.css";

function Modal({ isOpen, onClose,title,children }) {  //resuable modal component
    if(!isOpen) return null;    //if modal is not open ,return nothing 

    return (
        <div className="modal-background" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
                <h2>{title}</h2>
              
            </div>
         
         <div className="modal-body">{children}</div>   {/*children allows dynamic content inside modal*/}
         
         <div className="modal-footer">
            <button className="cancel-btn" onClick={onClose}>Close</button>
         </div>
         </div>
        </div>
    );
}

export default Modal;
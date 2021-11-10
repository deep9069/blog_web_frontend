import React from 'react';
import reactDom from 'react-dom';
import sad_face from "./../../assets/images/sad_face.png";
import "./error_dialog.css";
function ErrorModel() {
    return (
        reactDom.createPortal(<div id="error_model_page">
            <div id="error_model">
                <div id="face_container">
                    <img src={sad_face} alt="sad face" />
                    <h3>Error 404</h3>
                </div>
                <div id="lower_container">
                    <div id="error_msg">
                        Page not found
                    </div>
                    <button id="error_dialog_btn">
                        Retry
                    </button>
                </div>
            </div>
        </div>
            ,
            document.getElementById("model")
        )
    )
}

export default ErrorModel;

import React, {useState, useContext} from 'react';
import emailjs from 'emailjs-com';
import { CartContext } from '../../contexts/CartContext';
import './Form.css';

export const Form = (props) => {
    return (
            <form className={props.className? props.className : "form"} onSubmit={props.onSubmit}>
                {props.children}
            </form>
    );
};

export default function MyForm(props) {

    const cart = useContext(CartContext).cart;

    const onSubmit = (e) => {

        e.preventDefault();// Prevents default refresh by the browser
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target,  process.env.REACT_APP_EMAILJS_USER_ID)
        .then(result => {
                alert('Votre message a bien été envoyé ! Je vous répondrais le plus rapidement possible ! :)', result.text);
            },
            error => {
                alert('Une erreur est survenue, merci de m\'envoyer directement un mail.' ,error.text)
            });
    };

    const cartValue = cart.length > 0 ? '[' + cart.toString() + ']': "Sélectionnez...";

    return (
        <div className={"myForm-container myForm-email"} >
            <div className={"myForm-title-container"}>
                <h3 className={"myForm-title"}>Contactez moi !</h3>
            </div>
            <Form className={"myForm-formContainer"} onSubmit={onSubmit}>
                <div className={"myForm-inputContainer"} >
                    <p className={"form__input-label"}>Votre nom</p>
                    <input name='from_name' type="text" placeholder="Votre Nom…" className="form__input" />
                </div>

                <div className={"myForm-inputContainer"}>
                    <p className={"form__input-label"}>Votre meilleure adresse e-mail</p>
                    <input name='from_email' type="text" placeholder="Email…" className="form__input" />
                </div>

                <div className={"myForm-inputContainer"}>
                    <p className={"form__input-label"}>Technologies</p>
                    <input name='tech' type="text" placeholder="" className="form__input" /*disabled={true}*/
                           value={cartValue}/>
                </div>

                <div className={"myForm-inputContainer"}>
                    <p className={"form__input-label"}>Votre message:</p>
                    <textarea name='message' type="text" placeholder="Votre message…" className="form__input-message">
                    {"Bonjour Enzo,\n"}
                    </textarea>
                </div>

                <div className={'myForm-footer'}>
                    <button className={"form__input—button"}>Envoyer</button>
                </div>
            </Form>
        </div>
    );
}

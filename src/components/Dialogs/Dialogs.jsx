import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Form, Formik, Field, ErrorMessage} from "formik";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm sendMessage={props.sendMessage}/>
                </div>
            </div>
        </div>
    )
}


const AddMessageForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{newMessageBody: ''}}
                validate={values => {
                    const errors = {}
                    const textLength = 30;
                    if (!values.newMessageBody.length) {
                        errors.newMessageBody = 'Your message is too short';
                    } else if (values.newMessageBody.length > 30) {
                        errors.newMessageBody = `Your message is more than ${textLength} characters`;
                    }
                    return errors;
               }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        props.sendMessage(values.newMessageBody);
                        values.newMessageBody = '';
                        setSubmitting(false);
                    }, 400);

                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <Field name='newMessageBody' component='textarea'
                                   placeholder='Enter your message'
                            />
                            <ErrorMessage name="newMessageBody" component='div'/>
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Dialogs;
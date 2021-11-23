import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Form, Formik, Field, ErrorMessage} from "formik";

const MyPosts = (props) => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <AddNewPostForm addPost={props.addPost}/>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}


const AddNewPostForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{newPostText: ''}}
                validate={values => {
                    const errors = {}
                    const textLength = 50;
                    if (!values.newPostText.length) {
                        errors.newPostText = 'Your post is too short';
                    } else if (values.newPostText.length > textLength) {
                        errors.newPostText = `Your post is more than ${textLength} characters`;
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        props.addPost(values.newPostText);
                        values.newPostText = '';
                        setSubmitting(false);
                    }, 400);

                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <Field name='newPostText' component='textarea'
                                   placeholder='Enter your post message'
                            />
                            <ErrorMessage name="newPostText" component='div'/>
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

export default MyPosts;
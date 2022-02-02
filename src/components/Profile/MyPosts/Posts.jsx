// import React from 'react';
// import s from './Posts.module.css';
// import Post from './Post/Post';
// import {Form, Formik, Field, ErrorMessage} from "formik";
//
// const Posts = (props) => {
//     let postsElements =
//         [...props.posts]
//             .reverse()
//             .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
//
//
//     return <div className={s.postsBlock}>
//         <h3>My posts</h3>
//         <div>
//             <AddNewPostForm addPost={props.addPost}/>
//         </div>
//         <div className={s.posts}>
//             {postsElements}
//         </div>
//     </div>
// }
//
//
// const AddNewPostForm = (props) => {
//     return (
//         <div>
//             <Formik
//                 initialValues={{newPostText: ''}}
//                 validate={values => {
//                     const errors = {}
//                     const textLength = 50;
//                     if (!values.newPostText.length) {
//                         errors.newPostText = 'Your post is too short';
//                     } else if (values.newPostText.length > textLength) {
//                         errors.newPostText = `Your post is more than ${textLength} characters`;
//                     }
//                     return errors;
//                 }}
//                 onSubmit={(values, {setSubmitting}) => {
//                     setTimeout(() => {
//                         props.addPost(values.newPostText);
//                         values.newPostText = '';
//                         setSubmitting(false);
//                     }, 400);
//
//                 }}
//             >
//                 {({isSubmitting}) => (
//                     <Form>
//                         <div>
//                             <Field name='newPostText' component='textarea'
//                                    placeholder='Enter your post message'
//                             />
//                             <ErrorMessage name="newPostText" component='div'/>
//                         </div>
//                         <div>
//                             <button type="submit" disabled={isSubmitting}>
//                                 Submit
//                             </button>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//
//         </div>
//
//     )
// }
//
// export default Posts;

import React from "react";
import Post from "./Post/Post";

import classes from './Posts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";
import Button from "../../common/Button/Button";

const maxLength300 = maxLengthCreator(300);

const Posts = React.memo(props => {
    let {addPostTC, profilePage} = props;

    const {posts} = profilePage;

    const postsElements = posts.map(el => (
        <Post message={el.post} key={el.id} likesCount={el.likesCount}/>
    ));

    const addNewPost = values => {
        addPostTC(values.newPost);
    };

    return (
        <div>
            <h2>My posts</h2>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    );
});

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.inputWrap}>
            <Field component={Textarea} name={"newPost"} placeholder={`Type your post...`}
                   className={classes.textarea} validate={[required, maxLength300]}/>
            <Button className={classes.addPostBtn}>Add post</Button>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: "postForm"})(AddPostForm);

export default Posts;

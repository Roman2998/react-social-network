import {addPostTC} from "../../../Redux/Profile/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {getProfilePageState} from "../../../Redux/Profile/profile-selectors";

const mapStateToProps = state => ({
    profilePage: getProfilePageState(state)
})

const mapDispatchToProps = {addPostTC};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;

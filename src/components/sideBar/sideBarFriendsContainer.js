import {connect} from "react-redux";
import SideBarFriends from "./sideBarFriends";


const mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SideBarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(SideBarFriends)


export default SideBarFriendsContainer;
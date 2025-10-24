const UserStatus = (props) => {
    if (props.loggedIn && props.isAdmin) {
        return <h1>Welcoms</h1>
    } else {
        return <h1>Wel</h1>
    }
}

export default UserStatus;
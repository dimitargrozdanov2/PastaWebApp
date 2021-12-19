import app from "../../firebase.js";

function Logout () {
    return (
        <>
        <button onClick={() => app.auth().signOut()}>Sign out</button>
        </>
    )
}

export default Logout;
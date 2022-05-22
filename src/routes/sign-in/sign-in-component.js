import { createUSerDocumentsFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase-utils";


const SignIn =() => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef =  await createUSerDocumentsFromAuth(user)
       // console.log(user);
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google PopUp
            </button>
        </div>
    );
}

export default SignIn;
import React from "react";
import { useAuth } from "../../context/authContext";
export default function BlogPage() {
  // eslint-disable-next-line no-unused-vars
  const [auth, userSignedIn, userSignOut] = useAuth(useAuth);
  const signOutUser = () => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        userSignedIn: false,
        credential: {
          name: "",
          email: "",
          password: "",
        },
      })
    );
    userSignOut();
  };
  return (
    <div>
      This is blog page
      {auth.userSignedIn === true && (
        <div>
          <h1>{auth.name}</h1>
          <h1>{auth.email}</h1>
          <br />
          <button onClick={signOutUser}>Sign out</button>
        </div>
      )}
      {auth.userSignedIn === false && (
        <>
          <h1>User Is Not Login</h1>
        </>
      )}
      <br />
      <button
        onClick={() => {
          console.log(auth);
        }}
      >
        print auth
      </button>
    </div>
  );
}

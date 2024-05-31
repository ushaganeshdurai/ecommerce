import { useSession, signIn, signOut, SessionContext } from "next-auth/react"
import styles from '/Globals.module.css'

export function useCustomSession(){
  const {data:session,status}=useSession();
  return {session,status};
}

export default function Login() {
  const { session } = useCustomSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className={styles.btn} onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className={styles.btn} onClick={() => signIn()}>Sign in</button>
    </>
  )
}

// try to use session context

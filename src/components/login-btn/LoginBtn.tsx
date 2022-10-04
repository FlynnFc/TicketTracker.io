import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginBtn() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <>
        <p className="fixed left-16 text-base font-semibold">
          You are signed in as {session.user.name}
        </p>
        <button className="btn" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="btn btn-primary btn-active mr-2"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}

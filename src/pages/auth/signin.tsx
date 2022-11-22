import { getProviders, signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import Iconbigger from "../../components/IconBigger/IconBigger";
export default function SignIn(props: { providers: object }) {
  console.log(props.providers);
  return (
    <div
      className="mt-[10%] flex items-center justify-center"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div className="mb-10 flex w-96 flex-col items-center justify-start rounded-md bg-base-200 p-6 shadow-lg shadow-base-300">
        <h1 className="pb-4 text-3xl font-bold text-base-content">Sign in</h1>
        <div className="my-2 w-full space-y-2 border-b-2 border-base-100 pb-4">
          <p className="text-error">Email sign in not available</p>
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-lg bg-base-100 p-3"
          />{" "}
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-base-100 p-3"
          />
          <button className="btn btn-primary w-full" disabled>
            Sign in
          </button>
        </div>

        {props.providers &&
          Object.values(props.providers).map(
            (provider: { id: string; name: string }) => (
              <div
                className="mt-2 flex w-full justify-center"
                key={provider.name}
                style={{ marginBottom: 0 }}
              >
                <div
                  className="btn btn-lg"
                  onClick={() =>
                    signIn(provider.id, { callbackUrl: "/demo/dashboard" })
                  }
                >
                  Sign in with {provider.name}
                  <Iconbigger>
                    <FcGoogle className="mx-4 inline" />
                  </Iconbigger>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

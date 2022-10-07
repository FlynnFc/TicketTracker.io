import Link from "next/link";
export default function Custom404() {
  return (
    <main className="m-16 flex flex-col items-center justify-center space-x-4">
      <h1 className="text-3xl font-bold">
        404 - That page does not seem to exist...
      </h1>
      <iframe
        src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
        width="480"
        height="362"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/">
        <button className="btn btn-primary m-4">Go home</button>
      </Link>
    </main>
  );
}

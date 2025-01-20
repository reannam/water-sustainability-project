import Link from "next/link";

export function NavBar() {
  return (
    <div className="navbar bg-teal-500">
      <div className="navbar-start">
        <Link
          className="btn btn-ghost text-xl flex items-center space-x-2"
          href="/"
        ></Link>
      </div>
      <div className="absolute right-12">
        <div className="ml-auto flex place-items-end space-x-2">
          <Link
            className="btn btn-ghost text-xl flex items-center space-x-2"
            href="/info"
          ></Link>
        </div>
      </div>
    </div>
  );
}

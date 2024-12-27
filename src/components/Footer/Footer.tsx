import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" from-blue-300 via-blue-300 to-white pt-12 pb-6 px-10 xl:px- font-sans tracking-wide relative border-t border-blue-400 bg-[url(https://img.freepik.com/free-vector/abstract-blue-watercolor-background-vector_53876-144154.jpg)] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-blue-600 xl:text-lg font-semibold text-sm uppercase mb-4 hover:scale-110 transition-all cursor-pointer hover:text-white tracking-wide w-fit">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-800 xl:text-[15px] lg:hover:border-b-[1px] border-white pb-1 lg:hover:text-blue-900 transition-all"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 xl:text-[15px] hover:border-b-2 pb-1 border-white  hover:text-blue-900 transition-all"
                >
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 xl:text-[15px] hover:border-b-[1px] pb-1 border-white  hover:text-blue-900 transition-all"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-blue-600 xl:text-lg font-semibold text-sm uppercase mb-4 hover:scale-110 transition-all cursor-pointer hover:text-white tracking-wide w-fit">
              Follow Us
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/mhamzazai/"
                  target="_blank"
                  className="text-blue-800 xl:text-[15px] hover:border-b-[1px] pb-1 border-white  hover:text-blue-900 transition-all"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/~mhamzazai"
                  target="_blank"
                  className="text-blue-800 xl:text-[15px] hover:border-b-2 pb-1 border-white  hover:text-blue-900 transition-all"
                >
                  Npm
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 xl:text-[15px] hover:border-b-[1px] pb-1 border-white  hover:text-blue-900 transition-all"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-blue-600 xl:text-lg font-semibold text-sm uppercase mb-4 hover:scale-110 transition-all cursor-pointer hover:text-white tracking-wide w-fit">
              Company
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-800 xl:text-[15px] hover:border-b-[1px] pb-1 hover:text-blue-900 transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 xl:text-[15px] hover:border-b-2 pb-1 hover:text-blue-900 transition-all"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 xl:text-[15px] hover:border-b-[1px] pb-1 hover:text-blue-900 transition-all"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:justify-center max-sm:-order-1">
            <a href="#top">
              <Image
                src={
                  "https://marketplace.canva.com/EAF6ICBwJ7U/1/0/1600w/canva-blue-and-white-circle-retail-logo-jWnP4G7rjfI.jpg"
                }
                alt="Logo"
                width={110}
                height={100}
                className="rounded-full shadow-lg lg:hover:scale-110 transition-transform lg:hover:shadow-2xl"
              />
            </a>
          </div>
        </div>

        <hr className="mt-8 mb-6 border-blue-200 border-b-2 rounded-full w-full" />

        <div className="flex sm:justify-end flex-wrap gap-6">
          <p className="text-blue-800 font-semibold hover:scale-105 hover:text-blue-900 transition-all duration-300">
            © Online Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

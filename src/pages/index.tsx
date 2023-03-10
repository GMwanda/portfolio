import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/george.jfif";

export default function Home() {
  return (
    <div>
      <Head>
        <title>George Josiah Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10">
        <section className="min-h-screen">
          {/* NAVBAR */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">developedbyJosiah</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"></BsFillMoonStarsFill>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 px-4 py-2 rounded-md ml-8"
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/*  */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              George Josiah
            </h2>
            <h3 className="text-2xl py-2">Developer & Designer</h3>
            <p className="text-medium py-5 leading-8 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quis quisquam optio illo in, officia magni exercitationem cum
              inventore saepe architecto voluptatem corrupti aspernatur, aliquam
              modi sequi labore, veritatis pariatur.
            </p>
          </div>
          {/*  */}
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-200">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          {/*  */}
          <div className="">
            <Image src={deved} />
          </div>
        </section>
      </main>
    </div>
  );
}

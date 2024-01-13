import Image from "next/image";
import { lexend_deca } from "@/app/resources/fonts";
import Bubble from "@/app/components/bubble";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start p-24">
      <h1
        className={
          "mb-3 text-4xl font-base text-center " + lexend_deca.className
        }
      >
        Community Environment Module Portal
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col max-w-[25ch] align-center p-8">
          <h3 className="mb-3 text-2xl font-semibold">Hi, You made it!</h3>
          <p className="m-0 text-base opacity-50">
            This is where you can see all the statistics from your
            Community&apos;s Environment module.
          </p>
        </div>
        <Bubble>Connecting to...</Bubble>
      </div>
    </main>
  );
}

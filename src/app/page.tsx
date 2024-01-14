import Image from "next/image";
import { lexend_deca } from "@/app/resources/fonts";
import Bubble from "@/app/components/bubble";
import { createClient } from "redis";
import LineChartCustom from "@/app/components/lineChart";
import test from "@/app/test";

export default async function Home() {
  const client = await createClient({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    socket: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
    },
  })
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  let ping = await client.ping();
  await client.disconnect();

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
        <div className="flex flex-col max-w-[30ch] align-center p-8">
          <h3 className="mb-3 text-2xl font-semibold">Hi, You made it!</h3>
          <p className="m-0 text-base opacity-50">
            This is where you can see all the statistics from your
            Community&apos;s Environment module.
          </p>
        </div>
        <Bubble className="flex-col">
          <p className="m-2">Connecting to: {process.env.DB_HOST}</p>
          <p className="m-2">
            Connection State: {ping == "PONG" ? "Connected" : "Not Connected"}
          </p>
        </Bubble>
      </div>
      <div className="h-[35ch] m-4 py-[5ch]">
        <LineChartCustom data={test} xKey="timeStamp" yKeys={["sound"]} />
        <LineChartCustom data={test} xKey="timeStamp" yKeys={["temp"]} />
        <LineChartCustom data={test} xKey="timeStamp" yKeys={["humidity"]} />
      </div>
    </main>
  );
}

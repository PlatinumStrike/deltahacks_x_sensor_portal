import { Children } from "react";

export default function Bubble(props: { className?: string; children: any }) {
  return (
    <div
      className={
        "grow flex rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 m-14"
      }
    >
      <div
        className={"grow flex justify-center items-center " + props.className}
      >
        {Children.toArray(props.children)}
      </div>
    </div>
  );
}

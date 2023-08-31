import Image from "next/image";
import Link from "next/link";

export default function Projects({ item, darkMode }) {
  return (
    <div
      className="text-sm md:text-md rounded-b flex flex-col justify-center shadow "
      key={item.id}
    >
      <Image
        className="rounded-t self-start"
        src={item.image}
        alt={item.title}
      />
      <div
        className={`card text-sm md:text-md rounded-b flex flex-col gap-2 justify-start p-4 pb-5 ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <div className="title text-left flex items-center justify-between">
          <span className="capitalize text-base font-semibold">
            {item.title}
          </span>
          <span className="capitalize">
            <div className="gradient-text flex gap-2">
              {item.stack.map((stack, index) => (
                <p className="uppercase" key={index}>
                  {stack}
                </p>
              ))}
            </div>
          </span>
        </div>
        <div className="title text-left md:14">
          <span className="first-letter:uppercase teext-sm md:text-base">
            {item.description}
          </span>
        </div>
        <div className="buttons mx-auto mt-auto">
          <button className="btn text-md font-bold py-2 px-4">
            <Link
              href={item.preview}
              target="_blank"
              // rel="noopener noreferrer"
            >
              Preview
            </Link>
          </button>
          {item.code && (
            <button className="btn text-md font-bold py-2 px-4">
              <Link
                href={item.code}

                target="_blank"
                // rel="noopener noreferrer"
              >
                Code
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

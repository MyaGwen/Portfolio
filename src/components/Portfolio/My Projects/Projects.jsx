import Image from "next/image";

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
                <p>{stack}</p>
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
          {/* <button className="btn text-md font-bold py-2 px-4"> */}
          <a
            href={item.preview}
            className="btn text-md font-bold py-2 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
          {/* </button> */}
          {item.code && (
            <a
              href={item.code}
              className="btn text-md font-bold py-2 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

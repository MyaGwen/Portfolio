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
        className={`card text-sm md:text-md rounded-b flex flex-col gap-1 justify-start p-4 ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <div className="title text-left">
          <span className="font-bold capitalize">title: </span>{" "}
          <span className="capitalize">{item.title}</span>
        </div>
        <div className="tech-stack">
          <span className="font-bold capitalize">stack: </span>{" "}
          <span className="uppercase">
            {item.stack}
            <span className="capitalize">
              {item.responsive === true ? ", Responsive" : ", Not Responsive"}
            </span>{" "}
          </span>
        </div>
        <div className="title text-left md:14">
          <span className="font-bold capitalize">description: </span>{" "}
          <span className="first-letter:uppercase">{item.description}</span>
        </div>
        <div className="buttons mx-auto mt-auto">
          <button className="btn text-md font-bold py-2 px-4">
            {" "}
            <a href={item.preview} target="_blank" rel="noopener noreferrer">
              Preview
            </a>
          </button>
          {item.code && (
            <button className="btn text-md font-bold py-2 px-4">
              {" "}
              <a href={item.code} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ item, darkMode }) {
  return (
    <div
      className="card text-sm md:text-md rounded-b flex flex-col justify-center p-4"
      key={item.id}
    >
      <img className="rounded-t self-start" src={item.image} alt={item.title} />
      <div
        className={`card text-sm md:text-md rounded-b flex flex-col gap-1 justify-center p-4 ${
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
              {item.responsive === true ? ", Responsive" : ""}
            </span>{" "}
          </span>
        </div>
        <div className="title text-left">
          <span className="font-bold capitalize">description: </span>{" "}
          <span className="capitalize">{item.description}</span>
        </div>
        <div className="buttons self-center">
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

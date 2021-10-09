import TextLoop from "react-text-loop";
const descriptions: Array<string> = [
  "a JS developer",
  "an AWS developer",
  "an TS developer",
  "a Scrum Master",
  "Mexican",
];
const Welcome = () => {
  return (
    <div className="h-screen min-h-screen flex justify-center items-center  dark:bg-gray-800 bg-gray-400">
      <div className="flex items-center flex-wrap md:flex-nowrap md:justify-around justify-center w-full">
        <div className="text-4xl font-medium subpixel-antialiased text-center my-5 w-full md:w-52 md:text-left dark:text-white">
          <span>Juan is </span>
          <TextLoop>
            {descriptions.map((description) => {
              return <span key={description}>{description}</span>;
            })}
          </TextLoop>
        </div>

        <img
          alt="Juan Ramon Espinosa Lopez"
          className="rounded-full w-100 sm:w-auto h-80 md:h-96 shadow-2xl"
          src="/img/me2.jpg"
        />
      </div>
    </div>
  );
};
export default Welcome;

import Card from "../Card";
import Rating from "../Rating";
import "./index.css";

interface Skill {
  name: string;
  rating: number;
}
const skills: Array<Skill> = [
  {
    name: "Javascript",
    rating: 5,
  },
  {
    name: "Typescript",
    rating: 4.5,
  },
  {
    name: "Node",
    rating: 4,
  },
  {
    name: "Express",
    rating: 4,
  },
  {
    name: "Apollo Server",
    rating: 4.5,
  },
  {
    name: "React",
    rating: 5,
  },
  {
    name: "React Native",
    rating: 5,
  },
  {
    name: "Redux",
    rating: 4,
  },
  {
    name: "CSS & SCSS",
    rating: 3.5,
  },
];
const BIRTH_DATE = new Date("1996-10-13");
const ONE_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const getAge = (birthDate: Date) =>
  Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / ONE_YEAR);

const Curriculum = () => {
  return (
    <div className="py-10 curriculum">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex justify-around flex-wrap">
            <Card className="w-11/12 lg:w-2/6 dark:bg-gray-800 dark:text-gray-100 my-5">
              <div className="divide-y-2 divide-solid divide-gray-600 dark:divide-green-700">
                <p className="text-2xl pb-1">Who am I?</p>
                <p className="text-lg text-justify pt-2">
                  Hello there! I'm Juan Espinosa and I'm {getAge(BIRTH_DATE)}{" "}
                  years old. I'm a FullStack Javascript {`&`} Typescript
                  developer with a great passion for technology. I am currently
                  working for TTT Studios as a Frontend developer using modern
                  frameworks and libraries.
                  <a
                    href="/CV.pdf"
                    className="flex justify-center items-center mt-10 text-white h-16 bg-green-700 hover:bg-green-800 rounded w-full transition-all duration-500"
                    download
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </Card>
            <Card className="w-11/12 lg:w-2/6 dark:bg-gray-800 dark:text-gray-100 my-5">
              <div className="divide-y-2 divide-solid divide-gray-600 dark:divide-green-700">
                <p className="text-2xl pb-1">Skills</p>
                <div className="text-lg w-full pt-2">
                  <table className="table-auto w-full">
                    <tbody>
                      {skills
                        .sort((a, b) => b.rating - a.rating)
                        .map((skill) => {
                          return (
                            <tr key={skill.name}>
                              <td>{skill.name}</td>
                              <td>
                                <Rating
                                  rating={skill.rating}
                                  className=" items-center justify-end"
                                />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Curriculum;

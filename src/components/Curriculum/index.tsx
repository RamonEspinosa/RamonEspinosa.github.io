import Card from "../Card";
import Rating from "../Rating";
import Timeline from "../Timeline";
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
    name: "Express",
    rating: 4,
  },
  {
    name: "Apollo Server",
    rating: 4.5,
  },
  {
    name: "Angular",
    rating: 3,
  },
  {
    name: "React Native",
    rating: 4,
  },
  {
    name: "React",
    rating: 4,
  },
  {
    name: "HTML",
    rating: 5,
  },
  {
    name: "CSS",
    rating: 3.5,
  },
];

const Curriculum = () => {
  return (
    <div className="py-10">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex justify-around flex-wrap">
            <Card className="w-11/12 lg:w-3/6 dark:bg-gray-800 dark:text-gray-100 my-5">
              <div className="divide-y-2 divide-solid divide-gray-600 dark:divide-yellow-400">
                <p className="text-2xl">Who am I?</p>
                <p className="text-lg text-justify">
                  Hello there! I am Ramon Espinosa. I am 24 years old and I am
                  currently living in Mexico. I am a FullStack Javascript {"&"}{" "}
                  Typescript developer. I graduated university as an Engineer in
                  computer systems. I chose to become a web and mobile developer
                  because I have a great passion for technology. During my time
                  at the university, FreeCodeCamp helped me increase my skills
                  and land my first job at Cointic, where I created numerous
                  systems and apps using PHP, JS, Java and MySQL. As time passed
                  by, I became a more professional developer and at the moment,
                  I am working at Prixz (A highly technological pharmaceutic
                  company that focuses on selling drugs to both clients and
                  drugstores). During this period of my life, I decided I would
                  like to get a Masters degree in Computer Science. You can read
                  more about my work in the Portfolio section below.
                </p>
              </div>
            </Card>
            <Card className="w-11/12 lg:w-2/6 dark:bg-gray-800 dark:text-gray-100 my-5">
              <div className="divide-y-2 divide-solid divide-gray-600 dark:divide-yellow-400">
                <p className="text-2xl">Skills</p>
                <div className="text-lg w-full">
                  <table className="table-auto w-full">
                    <tbody>
                      {skills.map((skill) => {
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
            <Card className="w-11/12 dark:bg-gray-800 dark:text-gray-100 my-5">
              <div className="divide-y-2 divide-solid divide-gray-600 dark:divide-yellow-400">
                <p className="text-2xl">Timeline</p>
                <div className="text-lg w-full">
                  <Timeline/>
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

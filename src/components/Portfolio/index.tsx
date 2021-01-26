import Image from "../../utils/Image";
import Card from "../Card";
import Tag from "../Tag";
import "./index.css";
interface Project {
  id: number;
  title: string;
  img: Image;
  imgClassName?: string;
  tags: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 0,
    title: "Cointic",
    tags: ["PHP", "Express", "MySQL", "JAVA", "JS", "Angular", "JQuery"],
    description:
      "This is the startup company where I first worked. At first I felt overwhelmed of all the concepts and technologies I had to learn. As time passed by, I worked on some projects where I got experience and confidence. Special thanks to Fernando Monroy, who was a great CEO and technical leader that always taught me new stuff.",
    img: new Image({ src: "/img/cointic.png", alt: "Cointic Logo" }),
  },
  {
    id: 1,
    title: "Preveer",
    tags: ["PHP", "MySQL", "JAVA", "JS", "JQuery", "HTML", "CSS"],
    description:
      "This was my first project, and one of the hardest ones I have coded. At first It was only a web application that preveer would use to arrange and organize important documents. Then, the company started to ask for newer features such as an Android mobile application for their employees. We ended up with a project bigger than expected!",
    img: new Image({ src: "/img/preveer.png", alt: "Preveer Logo" }),
  },
  {
    id: 2,
    title: "CDI",
    tags: ["PHP", "MySQL", "JAVA", "JS", "JQuery", "HTML", "CSS"],
    description:
      "This project was tough because it was large and risky. It involved creating an entire system for a clinical laboratory, a mobile application for their patients and another system for their employees. It was because of this project that I learned that the larger the project, the higher the risk of failing! It is better to keep things separate and divide projects in small chunks.",
    img: new Image({ src: "/img/cdi.png", alt: "CDI Logo" }),
  },
  {
    id: 3,
    title: "Antar",
    tags: ["NodeJS", "Express", "MySQL", "JS", "Angular", "SASS"],
    description:
      "This project was the very first one I was fully involved with. It involves an Express API that a web application uses to save data & documents of antar's clients. The web application uses that data in order to show some graphs and charts made with Chart.JS that are pretty useful for their CEO's.",
    img: new Image({ src: "/img/antar.png", alt: "Antar logo" }),
  },
  {
    id: 4,
    title: "Deisa",
    tags: ["NodeJS", "Express", "MySQL", "JS", "Angular", "SASS"],
    description:
      "Deisa is a subsidiary company of Antar, and because of that reason I used the same API that was built for Antar. This company wanted their clients to contact them and ask them for project prices by filling an online form. I learned so much about scalability with this project!",
    img: new Image({ src: "/img/deisa.png", alt: "Deisa logo" }),
  },
  {
    id: 5,
    title: "Globalshield",
    tags: ["NodeJS", "Express", "MySQL", "JS", "Angular", "SASS"],
    description:
      "Globalshield is a company that stores values inside strongboxes. People usually store important assets such as diamonds, gold, or documentation. Globalshield wanted their clients to keep track of when they needed to pay the rent of their safe, as well as the status of their box and that is exactly what I developed. Thanks to that, Globalshield reduced drastically the number of clients that were not paying the rent.",
    img: new Image({ src: "/img/globalshield.png", alt: "Globalshield logo" }),
  },
  {
    id: 6,
    title: "Grupo de la parra",
    tags: ["PHP", "Codeigniter", "MySQL", "JS", "Angular", "SASS"],
    description:
      "Grupo de la parra hires your household employees and provides them with salary, insurance and benefits for a monthly amount. We made a web system so that their clients could access an ecommerce where they could customize the benefits, wage and type of insurance their employees would have, as well as setting up recurring payment. It was a nice challenge.",
    img: new Image({ src: "/img/parra.png", alt: "Grupo de la parra logo" }),
  },
  {
    id: 7,
    title: "Heart Connect",
    tags: ["Unity", "C#"],
    description:
      "I participated in the 2020 Global Game Jam of Mexico City. It was a fun experience where I got to meet other programmers, as well as designers. Together, we developed a puzzle game about a small robot in charge of repairing a bigger robot. It was pretty exhausting because it involved using a completely new language for me and we had a 2 day time limit.",
    img: new Image({ src: "/img/ggj.png", alt: "Global Game Jam logo" }),
  },
  {
    id: 8,
    title: "Legasign",
    tags: ["HTML", "SASS", "JS"],
    description:
      "Legalario asked Isotopo (company of a friend of mine) for the front end of one of their products. Isotopo then hired me to code this project on my own. It involved coding all the interfaces and components they would use in their document signing software. After a month, I completed this project and they are now implementing it on their website.",
    img: new Image({ src: "/img/legasign.png", alt: "Legasign logo" }),
    imgClassName: "img-border-shadow",
  },
  {
    id: 9,
    title: "Prixz",
    tags: [
      "NodeJS",
      "Apollo Server",
      "Express",
      "PostgreSQL",
      "React",
      "React Native",
    ],
    description:
      "I currently develop and maintain software for Prixz. Me and some partners are fully responsibles of all their AWS instances, as well as their web systems and mobile apps. I love this job because it involves working with a proficient team of developers with a modern stack of technologies. I do have to say it was hard at the beginning because they already had some code written out, but after some time I was able to fully understand both the company's needs and the code.",
    img: new Image({ src: "/img/prixz.png", alt: "Prixz logo" }),
  },
];

const Portfolio = () => {
  return (
    <div className="py-10">
      <p className="text-black dark:text-white text-center text-3xl font-bold">
        Projects I have worked on
      </p>
      <div className="w-full">
        <div className="container mx-auto ">
          <div className=" flex flex-wrap justify-around items-stretch my-5">
            {projects
              .sort((a, b) => b.id - a.id)
              .map((project) => {
                return (
                  <Card
                    key={project.id}
                    className="w-11/12 lg:w-5/12 dark:bg-gray-800 dark:text-gray-100 my-5"
                  >
                    <div className="flex flex-col justify-center items-center h-full ">
                      <img
                        className={
                          "max-w-1/2 max-h-20 " + (project.imgClassName || "")
                        }
                        src={project.img.src}
                        alt={project.img.alt}
                      />
                      <p className="text-2xl text-center font-sans  tracking-wider">
                        {project.title}
                      </p>

                      <p className="text-sm text-justify my-5">
                        {project.description}
                      </p>

                      <div className="mt-auto self-end flex flex-wrap justify-end">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

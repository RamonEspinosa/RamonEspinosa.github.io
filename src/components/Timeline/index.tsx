import { Chrono } from "react-chrono";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
const items: TimelineItemModel[] = [
  {
    title: "2020 - present",
    cardTitle: "FullStack Developer",
    cardSubtitle: "At Prixz",
    cardDetailedText: "I am currently working as a fullstack developer for this company. I use React, React Native, NodeJS, Express, Apollo Server and PostgreSQL as my main stack and I am enjoying it so much that I decided I will be coding many more projects from now on with these technologies. I have learned so much during my time here thanks to the development team (special thanks to Hugo, Iván and Andrés). ",
    media: undefined,
  },
  {
    title: "2018 - 2020",
    cardTitle: "FullStack Developer",
    cardSubtitle: "At Cointic",
    cardDetailedText: "This was my first developer job and I remember I was really excited when I got it. Since I was still in school at the time, I started working part time, but after 6 months I was contracted as a full time developer. I enjoyed my time at Cointic because I learned so many things that I am still applying to this day. There, I took the role of a Scrum master because I noticed there were some serious issues that were delaying most of the projects. At the time I knew nothing about Agile, so I read \"Head First Agile: A Brain-Friendly Guide to Agile Principles, Ideas, and Real-World Practices\" and after a month we were being more cooperative, self-organized and productive than ever before. Most of the time we had to code with PHP, JAVA, JS, HTML and CSS.",
    media: undefined,
  },
  {
    title: "June 2017",
    cardTitle: "English",
    cardSubtitle: "At Capilano University",
    cardDetailedText: "My university was so pleased with my notes and grades that I got the chance to travel to Vancouver, BC in order to study English as a second language. At the time, I already knew how to speak English properly, but this course definitely made a huge improvement.",
    media: undefined,
  },
  {
    title: "2014 - 2019",
    cardTitle: "Computer Systems",
    cardSubtitle: "At TESCHA",
    cardDetailedText: "As a student who had just finished high school, I decided to enroll in an engineering program at a local university because I have always thought people do not need a degree from a prestigious school so as to get a good job. I reckon that when coding, what matters the most is your skill to solve problems rather than any diploma that you may have.",
    media: undefined,
  },
];
const Timeline = () => {
  return (
    <div className="text-lg">
      <Chrono
        items={items}
        mode={"VERTICAL_ALTERNATING"}
        hideControls
        theme={{
          primary: "#000",
          secondary: "#d0d0d0",
          cardBgColor: "#9ca3af",
          cardForeColor: "#000",
          textColor: "#F00",
        }}
        
      />
    </div>
  );
};
export default Timeline;

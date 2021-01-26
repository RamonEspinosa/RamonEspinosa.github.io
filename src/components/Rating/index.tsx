import { IconType } from "react-icons";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
interface Props {
  rating: number;
  className?: string;
}
const generateStar = (StarType: IconType, index: number) => {
  return <StarType key={index} className="text-yellow-600 dark:text-yellow-400" />;
};
const getStars = (rating: number) => {
  const stars = [];
  let generated = 0;
  for (generated; generated < Number.parseInt(String(rating)); generated++) {
    stars.push(generateStar(BsStarFill, generated));
  }
  if (rating - generated >= 0.5) {
    stars.push(generateStar(BsStarHalf, generated));
    generated++;
  }
  for (generated; generated < 5; generated++) {
    stars.push(generateStar(BsStar, generated));
  }
  return stars;
};
const Rating = (props: Props) => {
  const stars = getStars(props.rating);
  return <div className={"flex flex-nowrap " + props.className}>{stars}</div>;
};
Rating.defaultProps = {
  rating: 0,
  className: "",
};
export default Rating;

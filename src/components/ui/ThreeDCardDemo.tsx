import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface IProps{
    titile:string;
    description:string;
    image:string;
    link:string;
    github:string;
}
export function ThreeDCardDemo(props:IProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[28rem] h-[32rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.titile}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={props.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            // as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className={`px-4 py-2 ${props.link === ""?'hover:cursor-not-allowed':'hover:cursor-pointer'} rounded-xl text-xs font-normal dark:text-white`}
            onClick={() => props.link!=="" &&  window.open(props.link, "_blank")}
          >
            Visit Site
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            onClick={() => props.link!== "" && window.open(props.github, "_blank")}
          >
            Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

import { FC } from "react";

interface OperatorCardProps {
  name: string;
  icon: string;
  card: string;
}

export const OperatorCard: FC<OperatorCardProps> = ({ name, icon, card }) => {
  return (
    <div className="flex w-[200px] flex-col items-center lg:w-[300px]">
      <div className="bg-cardBG bg-cover bg-no-repeat">
        <img src={card} alt="" />
      </div>
      <div className="relative top-[-20px] w-full bg-black p-2 text-center">
        <span className="text-lg text-white">{name}</span>
      </div>
      <div className="relative top-[-170px] w-[100px] lg:top-[-250px] lg:w-[175px]">
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

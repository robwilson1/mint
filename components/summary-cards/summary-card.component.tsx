import { SVGProps } from "react";
import { Card } from "@components/atoms";

interface SummaryCardProps {
  title: "Assets" | "Liabilites" | "Net Worth";
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  iconColour: "text-green-300" | "text-red-300" | "text-blue-300";
  total: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  Icon,
  iconColour,
  total,
}) => (
  <Card>
    <h3 className="text-3xl">{title}:</h3>

    <div className="grid grid-cols-12 items-center mt-5">
      <Icon className={`${iconColour} col-span-1`} />
      <p className="text-2xl col-start-3 col-span-10">
        £{`${total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
      </p>
    </div>
  </Card>
);

export default SummaryCard;

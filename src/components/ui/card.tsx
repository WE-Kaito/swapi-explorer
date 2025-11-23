import { Card as RadixCard, CardProps } from "@radix-ui/themes";
import { cn } from "@/components";

export function Card(props: CardProps) {
  const { className, ...rest } = props;
  const baseClassName = "";

  return <RadixCard className={cn(baseClassName, className)} {...rest} />;
}

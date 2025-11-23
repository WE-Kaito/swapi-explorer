import { Heading as RadixHeading, HeadingProps } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { cn } from "@/components";

export function Heading(props: HeadingProps) {
  const { className, ...rest } = props;
  const baseClassName = "py-4";

  return <RadixHeading className={cn(baseClassName, className)} {...rest} />;
}

import { Link as RadixLink } from "@radix-ui/themes";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Card } from "@/components";

type Props = NextLinkProps & { children: React.ReactNode };

export function ListLink({ children, ...rest }: Props) {
  return (
    <RadixLink asChild>
      <NextLink className={"!w-full !py-2"} {...rest}>
        <Card className={"!text-center"}>{children}</Card>
      </NextLink>
    </RadixLink>
  );
}

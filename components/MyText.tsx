import clsx from "clsx";
import { Text, TextProps } from "react-native";


interface MyTextProps extends TextProps {
  className?: string;
}

export default function MyText({ className, ...props }: MyTextProps) {
  return <Text className={clsx(
    !className?.includes("barlow") && "font-fraunces font-black", className)} {...props} />;
}

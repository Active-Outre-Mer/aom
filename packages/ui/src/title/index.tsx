import { forwardRef } from "react";
import { titleStyles } from "./styles";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

type PropTypes = ComponentPropsWithRef<"h1"> & VariantProps<typeof titleStyles>;

export const Title = forwardRef<HTMLHeadingElement, PropTypes>(({ order, className, ...props }, ref) => {
  const Component = `h${order}` as `h1`;
  return (
    <Component ref={ref} className={titleStyles({ className, order })}>
      {props.children}
    </Component>
  );
});

Title.displayName = "Title";

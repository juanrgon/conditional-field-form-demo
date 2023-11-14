import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

function GreatGrandparent() {
  const [trustFund, setTrustFund] = React.useState(100);

  return (
    <div>
      <button onClick={() => setTrustFund((f) => f - 10)}>Spend $10</button>
      <Parent trustFund={trustFund} />
    </div>
  );
}

function Parent(props: { trustFund: number }) {
  return <Child trustFund={props.trustFund} />;
}

function Child(props: { trustFund: number }) {
  return <div>Someday I will inherit ${props.trustFund}</div>;
}

import * as React from "react";
import { Button } from "~/components/ui/button";

export default function GreatGrandparent() {
  const [trustFund, setTrustFund] = React.useState(100);

  return (
    <div>
      <Button onClick={() => setTrustFund((f) => f - 10)}>
        Grandpa Spends $10
      </Button>
      <Parent trustFund={trustFund} />
    </div>
  );
}

function Parent(props: { trustFund: number }) {
  return <Child trustFund={props.trustFund} />;
}

function Child(props: { trustFund: number }) {
  return (
    <div>
      Grandchild: <em>Someday I will inherit ${props.trustFund}</em>
    </div>
  );
}

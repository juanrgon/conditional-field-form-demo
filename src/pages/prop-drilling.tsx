import * as React from "react";

export default function GreatGrandparent() {
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

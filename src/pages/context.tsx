import * as React from "react";
import { Button } from "~/components/ui/button";
import { createContext, useContext, useState } from "react";

const TrustFundContext = createContext<number>(0);

export default function GreatGrandparent() {
  const [trustFund, setTrustFund] = useState(100);

  return (
    <TrustFundContext.Provider value={trustFund}>
      <Button onClick={() => setTrustFund((f) => f - 10)}>
        Grandpa Spends $10
      </Button>
      <Parent />
    </TrustFundContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  const trustFund = useContext(TrustFundContext);

  return (
    <div>
      Grandchild: <em>Someday I will inherit ${trustFund}</em>
    </div>
  );
}

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Label } from "~/components/ui/label";

export default function Home() {
  const [food, setFood] = useState<Food | "">("");
  const [flavor, setFlavor] = useState<Flavor | "">("");
  const [amount, setAmount] = useState<number>(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-xlg font-bold">Cookies N Cream</h1>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <Label>Order</Label>
          <Select
            onValueChange={(v: Food) => {
              setFood(v);
              setFlavor("");
              setAmount(0);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Cookies">Cookies</SelectItem>
                <SelectItem value="Ice Cream">Ice Cream</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Label>Flavor</Label>
          <Select
            disabled={food === ""}
            onValueChange={(v: Flavor) => {
              setFlavor(v);
              setAmount(0);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {food === "Cookies" ? <CookieFlavors /> : <IceCreamFlavors />}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Label>Amount</Label>
          <Select
            disabled={food == "" || flavor === ""}
            onValueChange={(value: string) => setAmount(parseInt(value))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {amountOptions(food, flavor).map((amount) => (
                  <SelectItem key={amount} value={amount.toString()}>
                    {amount}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {!!amount && (
        <p>
          {amount} x {flavor} {food}
        </p>
      )}
    </main>
  );
}

function CookieFlavors() {
  return (
    <>
      <SelectItem value="Chocolate Chip">Chocolate Chip</SelectItem>
      <SelectItem value="Snickerdoodle">Snickerdoodle</SelectItem>
    </>
  );
}

function IceCreamFlavors() {
  return (
    <>
      <SelectItem value="Rocky Road">Rocky Road</SelectItem>
      <SelectItem value="Rum Raisin">Rum Raisin</SelectItem>
    </>
  );
}

function amountOptions(food: Food | "", flavor: Flavor | "") {
  if (food == "Cookies") {
    return [6, 12];
  }

  if (flavor == "Rocky Road") {
    return [1, 2, 3];
  }

  // not a lot of rum-raisin available, so only 1 scoop
  if (flavor == "Rum Raisin") {
    return [1];
  }

  return [];
}

type Food = "Ice Cream" | "Cookies";
type Flavor = "Chocolate Chip" | "Snickerdoodle" | "Rocky Road" | "Rum Raisin";

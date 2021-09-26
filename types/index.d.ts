declare namespace Mint {
  type Name = string;
  type Amount = number;
  type Interest = number;

  interface Update {
    name?: Name;
    amount?: Amount;
    interest?: Interest;
  }

  interface History {
    amount: Amount;
    date: number;
  }

  interface ChartHistory {
    date: number;
    name: string;
    [key: string]: string | number;
  }

  interface Asset {
    name: Name;
    history: History[];
  }

  interface Liability extends Asset {
    interest: Interest;
  }

  interface Store {
    assets: Asset[];
    liabilities: Liability[];
    addAsset: (name: Name) => void;
    removeAsset: (name: Name) => void;
    updateAsset: (name: Name, data: Update) => void;
    addLiability: (name: string) => void;
    removeLiability: (name: string) => void;
    updateLiability: (name: string, data: Update) => void;
  }

  interface TrendDataOutput {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    iconColour: "text-green-300" | "text-red-300" | "text-blue-300";
    total: number;
    previousTotal: number;
  }

  type Category = "Assets" | "Liabilities" | "Net Worth";
}

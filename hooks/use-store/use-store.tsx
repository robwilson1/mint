import create from "zustand";

import sampleData from "@data/sample.json";

const { assets, liabilities } = sampleData || { assets: [], liabilities: [] };

const useStore = create<Mint.Store>((set, get) => ({
  assets,
  liabilities,
  addAsset: (name) => {
    set(({ assets }) => ({
      assets: [
        ...assets,
        {
          name,
          history: [
            {
              amount: 0,
              date: Date.now(),
            },
          ],
        },
      ],
    }));
  },
  removeAsset: (name) => {
    set(({ assets }) => ({
      assets: assets.filter((asset) => asset.name === name),
    }));
  },
  updateAsset: (name, { amount, name: newName }) => {
    const asset = get().assets.find((asset) => asset.name === name);

    if (!asset) return;

    if (amount) {
      asset.history.unshift({
        amount,
        date: Date.now(),
      });
    }

    if (newName) asset.name = newName;

    set(({ assets }) => ({
      assets,
    }));
  },
  addLiability: (name) => {
    set(({ liabilities }) => ({
      liabilities: [
        ...liabilities,
        {
          name,
          interest: 0,
          history: [
            {
              amount: 0,
              date: Date.now(),
            },
          ],
        },
      ],
    }));
  },
  removeLiability: (name) => {
    set(({ liabilities }) => ({
      liabilities: liabilities.filter((Liability) => Liability.name === name),
    }));
  },
  updateLiability: (name, { amount, name: newName, interest }) => {
    const liability = get().liabilities.find(
      (liability) => liability.name === name
    );

    if (!liability) return;

    if (amount) {
      liability.history.unshift({
        amount,
        date: Date.now(),
      });
    }

    if (newName) liability.name = newName;
    if (interest) liability.interest = interest;

    set(({ liabilities }) => ({
      liabilities,
    }));
  },
}));

export default useStore;

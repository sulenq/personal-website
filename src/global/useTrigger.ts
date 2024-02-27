import { create } from "zustand";

type State = {
  trigger: boolean;
};

type Action = {
  setTrigger: (trigger: boolean) => void;
};

const useTrigger = create<State & Action>((set) => ({
  trigger: false,
  setTrigger: (triggerTerm) => set(() => ({ trigger: triggerTerm })),
}));

export default useTrigger;


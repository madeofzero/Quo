import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AppSettings = {};

type Store = {
  preferences: Partial<AppSettings>;
  setPreferences: (settings: Partial<AppSettings>) => void;
};

export const useGlobalStore = create<Store>()(
  persist(
    (set) => ({
      preferences: {},
      setPreferences(newPreferences) {
        set((state) => ({
          preferences: {
            ...state.preferences,
            ...newPreferences,
          },
        }));
      },
    }),
    {
      name: "quo-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

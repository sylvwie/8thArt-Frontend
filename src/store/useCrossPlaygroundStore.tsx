// STATE MANAGER FOR THE CROSS PLAYGROUND 
import { create } from "zustand";
import type { CrossReferenceProps } from "../components/props/CrossReferenceProps.tsx";

export type CrossSearchStep =
  | "uploading"
  | "scanning"
  | "result";

type CrossPlaygroundStore = {
  view: {
    step: CrossSearchStep;
    data: {
      file?: File | null;
      previewUrl?: string | null;
      results?: CrossReferenceProps[];
    };
  };

  uploadProgress: number;

  // navigation / actions
  setUploadProgress: (progress: number) => void;
  resetUpload: () => void;

  setStep: (step: CrossSearchStep) => void;
  setData: (data: Partial<CrossPlaygroundStore["view"]["data"]>) => void;
};

export const useCrossPlaygroundStore = create<CrossPlaygroundStore>((set) => ({
  view: {
    step: "uploading",
    data: {},
  },

  uploadProgress: 0,

  setUploadProgress: (progress) =>
    set({ uploadProgress: progress }),

  resetUpload: () =>
    set((state) => {
      // REVOCA il previewUrl precedente per evitare memory leak
      if (state.view.data.previewUrl) {
        URL.revokeObjectURL(state.view.data.previewUrl);
      }
      return {
        uploadProgress: 0,
        view: {
          step: "uploading",
          data: {},
        },
      };
    }),

  setStep: (step) =>
    set((state) => ({
      view: {
        ...state.view,
        step,
      },
    })),

  setData: (data) =>
    set((state) => ({
      view: {
        ...state.view,
        data: {
          ...state.view.data,
          ...data,
        },
      },
    })),
}));
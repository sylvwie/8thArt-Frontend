// STATE MANAGER FOR THE MAIN SHOWCASE COMPONENTS IN DASHBOARD
import { create } from "zustand";
import type { CrossReferenceProps } from "../components/props/CrossReferenceProps.tsx";

export type ShowcaseScreen =
	| "archive-search"
	| "cross-search";

export type CrossSearchStep =
	| "uploading"
	| "scanning"
	| "result"
	| "idle";

type ShowcaseStore = {
	view: {
		screen: ShowcaseScreen;
		step: CrossSearchStep;
			data: {
				file?: File | null;
				results?: CrossReferenceProps[]; 
			};
	};

	ui: {
		hideSuggestedGames: boolean;
	};

	uploadProgress: number;

	// navigation / actions
	setUploadProgress: (progress: number) => void;
	resetUpload: () => void;

	setStep: (step: CrossSearchStep) => void;
	setData: (data: Partial<ShowcaseStore["view"]["data"]>) => void;

	goToArchive: () => void;
	goToCrossSearch: () => void;
};

export const useShowcaseStore = create<ShowcaseStore>((set) => ({
	view: {
		screen: "archive-search",
		step: "idle",
		data: {},
	},

	ui: {
		hideSuggestedGames: false,
	},

	uploadProgress: 0,

	setUploadProgress: (progress) =>
		set({
			uploadProgress: progress,
		}),

	resetUpload: () =>
		set((state) => ({
			uploadProgress: 0,
			view: {
				...state.view,
				step: "uploading",
				data: {},
			},
		})),

	goToArchive: () =>
		set({
			view: {
				screen: "archive-search",
				step: "idle",
				data: {},
			},
			ui: {
				hideSuggestedGames: false,
			},
			uploadProgress: 0,
		}),

	goToCrossSearch: () =>
		set({
			view: {
				screen: "cross-search",
				step: "uploading",
				data: {},
			},
			ui: {
				hideSuggestedGames: true,
			},
			uploadProgress: 0,
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
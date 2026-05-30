import { create } from "zustand";

// STATE MANAGER FOR THE MAIN SHOWCASE COMPONENTS IN DASHBOARD

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
			image?: File | null;
			result?: unknown;
		};
	};

	ui: {
		hideSuggestedGames: boolean;
	};

	// navigation / actions
	goToArchive: () => void;
	goToCrossSearch: () => void;

	setStep: (step: CrossSearchStep) => void;
	setData: (data: Partial<ShowcaseStore["view"]["data"]>) => void;
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
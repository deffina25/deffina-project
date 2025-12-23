interface AppState {
  lang: string | null;
}

export const LANG = 1;

export const initialState: AppState = {
  lang: localStorage.getItem("language") || "ru",
};

interface AppAction {
  type: number;
  payload: string | null;
}

export const appReducer = (
  state: AppState = initialState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};

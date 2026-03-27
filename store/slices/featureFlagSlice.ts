import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FeatureFlags = {
    newNavbar: boolean;
}

const initialState: FeatureFlags = {
    newNavbar: false,
}

const featureFlagSlice = createSlice({
    name: "featureFlags",
    initialState,
    reducers: {
        setFlags: (state, action: PayloadAction<FeatureFlags>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setFlags } = featureFlagSlice.actions;
export default featureFlagSlice.reducer;
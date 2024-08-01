import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile } from '@/src/models/profile.models';
import * as serverService from '@/src/app/services/serverService';
import { RootState } from '../store';

interface ProfileState {
    profile: UserProfile | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProfileState = {
    profile: null,
    loading: false,
    error: null,
};

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async () => {
        const response = await serverService.getProfile();
        if (response.resultCode === 200) {
            return response.profile;
        } else {
            return response.resultDescription
        }
    }
);

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProfile.fulfilled, (state, action: PayloadAction<UserProfile>) => {
                state.profile = action.payload;
                state.loading = false;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default profileSlice.reducer;
export const profileSelector = (state: RootState) => state.profileReducer;
import { UserModel } from '@/domain/UserModel';
import { persistUser, readUser } from '@/utils/localStorage';
import { PrepareAction, createAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
    user: UserModel | null;
}

const initialState: UserState = {
    user: readUser(),
};

export const setUser = createAction<PrepareAction<UserModel>>('user/setUser', (newUser) => {
    persistUser(newUser);

    return {
        payload: newUser,
    };
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setUser, (state, action) => {
            state.user = action.payload;
        });
    },
});

export default userSlice.reducer;

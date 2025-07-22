import { createSlice } from '@reduxjs/toolkit';

interface Post {
    userId: string;
    content: string;
    createdAt: string;
}

interface Repost {
    userId: string;
    originalPostId: string;
    createdAt: string;
}

interface Follower {
    userId: string;
    name: string;
    avatarUrl: string;
}

interface Following {
    userId: string;
    name: string;
    avatarUrl: string;
}

interface Notification {
    id: string;
    type: string;
    message: string;
    read: boolean;
    createdAt: string;
}

interface UserState {
    userId: string | null;
    name: string;
    nickname: string;
    age: number;
    city: string;
    email: string;
    posts: Post[];
    reposts: Repost[];
    followers: Follower[];
    following: Following[];
    avatarUrl: string;
    bio: string;
    notifications: Notification[];
}

const initialState: UserState = {
    userId: null,
    name: '',
    nickname: '',
    age: 0,
    city: '',
    email: '',
    posts: [],
    reposts: [],
    followers: [],
    following: [],
    avatarUrl: '',
    bio: '',
    notifications: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.userId = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        clearUser(state) {
            state.userId = null;
            state.name = '';
            state.email = '';
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

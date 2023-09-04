import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ContactState {
  name: string;
  email: string;
  message: string;
}


const initialState: ContactState = {
  name: '',
  email: '',
  message: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof ContactState; value: string }>) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      state.name = '';
      state.email = '';
      state.message = '';
    },
  },
});

export const { updateField, resetForm } = contactSlice.actions;

export default contactSlice.reducer;

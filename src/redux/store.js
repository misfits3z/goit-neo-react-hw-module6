import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactSlice'
import filtersReducer from './filtersSlice'


// Створюємо store за допомогою configureStore
export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      filters: filtersReducer,
    },
  });
  

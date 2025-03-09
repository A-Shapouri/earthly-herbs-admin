import { useReducer, useState } from 'react';

export type ModuleStore<T> = {
  data: T[];
  error: Record<string, boolean>;
};

type Action<T> =
  | { type: 'SET_INITIAL', value: Array<T> }
  | { type: 'SET_VALUE'; key: string; value: any; index: number }
  | { type: 'ADD_NEW', new: T }
  | { type: 'DELETE'; index: number }
  | { type: 'VALIDATE'; index: number }
  | { type: 'RESET_ERRORS' };

const moduleReducer = <T>(state: ModuleStore<T>, action: Action<T>) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return {
        ...state,
        data: action.value,
      };

    case 'SET_VALUE': {
      const updatedData = [...state.data];
      updatedData[action.index] = { ...updatedData[action.index], [action.key]: action.value };

      return {
        ...state,
        data: updatedData,
        error: { ...state.error, [action.key]: !action.value },
      };
    }
    case 'ADD_NEW':
      return {
        ...state,
        data: [...state.data, action.new as T],
      };
    case 'DELETE': {
      const updatedData = [...state.data];
      updatedData.splice(action.index, 1);
      return { ...state, data: updatedData };
    }
    case 'VALIDATE': {
      const item = state.data[action.index];
      const errors = Object.keys(state.error).reduce((acc, key) => {
        acc[key] = !item[key as keyof T];
        return acc;
      }, {} as Record<string, boolean>);

      return { ...state, error: errors };
    }
    case 'RESET_ERRORS':
      return { ...state, error: {} };
    default:
      return state;
  }
};

export function useModuleForm<T>(initialState: ModuleStore<T>) {
  const [state, dispatch] = useReducer(moduleReducer<T>, initialState);
  const [itemIndex, setItemIndex] = useState(state.data.length - 1);

  const handleInitial = (value: Array<T>) => {
    dispatch({ type: 'SET_INITIAL', value });
  };

  const handleChange = (key: string, value: any) => {
    dispatch({ type: 'SET_VALUE', key, value, index: itemIndex });
  };

  const handleAdd = () => {
    dispatch({ type: 'VALIDATE', index: itemIndex });
    const errors = Object.keys(state.error).reduce((acc, key) => {
      acc[key] = !state.data[itemIndex][key as keyof T];
      return acc;
    }, {} as Record<string, boolean>);
    if (!Object.values(errors).some(Boolean)) {
      dispatch({ type: 'ADD_NEW', new: initialState.data[0] });
      setItemIndex((prev) => prev + 1);
    }
  };

  const handleUpdate = (actionType: 'edit' | 'delete', index: number) => {
    if (actionType === 'edit') {
      setItemIndex(index);
      dispatch({ type: 'RESET_ERRORS' });
    } else {
      dispatch({ type: 'DELETE', index });
      if (index < itemIndex) {
        setItemIndex((prev) => prev - 1);
      }
    }
  };

  return { state, dispatch, itemIndex, handleChange, handleAdd, handleUpdate, handleInitial };
}

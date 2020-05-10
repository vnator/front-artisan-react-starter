import { createAction } from '@reduxjs/toolkit';
import { toast } from './types';

const _setMessage = (value) => ({ payload: value });

const setMessage = createAction(toast.SET_MESSAGE, _setMessage);

const toggleActive = createAction(toast.TOGGLE_ACTIVE);

export { setMessage, toggleActive };

import actionTypes from './action-types';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(actionTypes.ADD_CONTACT);

export const deleteContact = createAction(actionTypes.DELETE_CONTACT);

export const filter = createAction(actionTypes.FILTER);


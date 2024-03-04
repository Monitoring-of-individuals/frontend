import { ThunkDispatch } from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { UTUserActions } from './userActions';

export type RootState = ReturnType<typeof rootReducer>;
export type TApplicationActions = UTUserActions;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;

import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, `/sessions/`, { email, password });

    const { token, user } = response.data;

    // set logedin (first time) user token for future api calls
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    if (err.response.data.error) {
      const { user_msg } = err.response.data.error;
      toast.error(user_msg);
    }

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, `/users/`, {
      name,
      email,
      password,
    });

    toast.success('Conta criada com sucesso, efetue o login');
    yield put(signUpSuccess());

    history.push('/');
  } catch (err) {
    if (err.response.data.error) {
      const { user_msg } = err.response.data.error;
      toast.error(user_msg);
    }

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    // load token from persist localstorage for future api calls
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

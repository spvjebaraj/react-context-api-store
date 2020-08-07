import { useAuthStore, useAuthDispatch, ACTIONS } from "../../store";
import { useEffect, useCallback } from "react";
import { auth } from "../../api/firbase";

export default function useAuth() {
  const dispatch = useAuthDispatch();
  const authStore = useAuthStore();

  const signIn = async (email, password) => {
    dispatch({ type: ACTIONS.SET_USER_INIT });

    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      dispatch({
        type: ACTIONS.SET_USER_SUCCESS,
        payload: {
          currentUser: response.user.uid,
          userName: response.user.displayName,
          isLoggedIn: true,
        },
      });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_USER_FAILURE, payload: error.message });
    }
  };

  const signUp = async (email, password, userName) => {
    dispatch({ type: ACTIONS.SET_USER_INIT });

    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await response.user.updateProfile({
        displayName: userName,
      });

      dispatch({
        type: ACTIONS.SET_USER_SUCCESS,
        payload: {
          currentUser: response.user.uid,
          userName: userName,
          isLoggedIn: true,
        },
      });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_USER_FAILURE, payload: error.message });
    }
  };

  const signOut = async () => {
    dispatch({ type: ACTIONS.SET_USER_INIT });

    try {
      await auth.signOut();

      dispatch({
        type: ACTIONS.SET_USER_SUCCESS,
        payload: {
          currentUser: null,
          isLoggedIn: false,
        },
      });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_USER_FAILURE, payload: error });
    }
  };

  const resetStore = useCallback(() => {
    dispatch({ type: ACTIONS.SET_STORE_EMPTY });
  }, [dispatch]);

  useEffect(() => {
    return () => {
      resetStore();
    };
  }, [resetStore]);

  return [authStore, { signIn, signUp, signOut, resetStore }];
}

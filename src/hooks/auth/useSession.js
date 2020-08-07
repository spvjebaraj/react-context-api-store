import { auth } from "../../api/firbase";
import { useEffect } from "react";
import { useAuthDispatch, ACTIONS } from "../../store";
import { useAuth } from "../../hooks";

export default function useSession() {
  const dispatch = useAuthDispatch();
  const [{ currentUser, error, isLoading, isLoggedIn }] = useAuth();

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_USER_INIT });

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({
          type: ACTIONS.SET_USER_SUCCESS,
          payload: {
            currentUser: user.uid,
            userName: user.displayName,
            isLoggedIn: true,
          },
        });
      } else {
        dispatch({
          type: ACTIONS.SET_USER_FAILURE,
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return {
    currentUser,
    error,
    isLoading,
    isLoggedIn,
  };
}

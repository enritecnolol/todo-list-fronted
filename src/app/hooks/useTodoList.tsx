import { useState, useEffect, useCallback } from "react";
import apiClient from "../../lib/axios";

// Interface to define the shape of the fetch state
interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
}

export function useTodoList<T>() {
  // State to manage the fetch state
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await apiClient.get("/tasks");
      setState({ data: response.data, isLoading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
      });
    }
  }, []);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Return the current state and a refetch function
  return { ...state, refetch: fetchData };
}

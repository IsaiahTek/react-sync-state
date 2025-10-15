import { useEffect, useSyncExternalStore } from "react";
import { Store, SynqStore } from "./types";

export function useStore<T>(store: Store<T>): T {
  return useSyncExternalStore(
    (cb) => store.subscribe(cb),
    () => store.snapshot,
    () => store.snapshot
  );
}

export function useServerSyncedStore<T extends { id: string }>(store: SynqStore<T>) {
  const state = useStore(store);
  useEffect(() => {
    if (store.status === "idle") {
      store.fetch();
    }
  }, [store]);
  return state;
}

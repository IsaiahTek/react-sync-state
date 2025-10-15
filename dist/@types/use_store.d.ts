import { Store, SynqStore } from "./types";
export declare function useStore<T>(store: Store<T>): T;
export declare function useServerSyncedStore<T extends {
    id: string;
}>(store: SynqStore<T>): T[];

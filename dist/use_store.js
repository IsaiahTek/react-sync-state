"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = useStore;
exports.useServerSyncedStore = useServerSyncedStore;
const react_1 = require("react");
function useStore(store) {
    return (0, react_1.useSyncExternalStore)((cb) => store.subscribe(cb), () => store.snapshot, () => store.snapshot);
}
function useServerSyncedStore(store) {
    const state = useStore(store);
    (0, react_1.useEffect)(() => {
        if (store.status === "idle") {
            store.fetch();
        }
    }, [store]);
    return state;
}
//# sourceMappingURL=use_store.js.map
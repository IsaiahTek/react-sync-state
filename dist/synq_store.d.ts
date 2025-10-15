import { Store } from "./store";
import { ServerOptions, SynqStoreStatus } from "./types";
export declare class SynqStore<T, B> extends Store<T> {
    status: SynqStoreStatus;
    private options;
    private timer?;
    constructor(initial: T[], options: ServerOptions<T, B>, key?: string);
    fetch(): Promise<void>;
    add(item: Partial<T>, xId?: B): Promise<void>;
    addMany(items: T[]): Promise<void>;
    update(item: T): Promise<void>;
    remove(id: string): Promise<void>;
    dispose(): void;
}

import { Listener } from "./types";
export declare class Store<T> {
    key: string;
    private state;
    private listeners;
    constructor(initial: T[], key?: string);
    get snapshot(): T[];
    add(item: T): void;
    update(item: T, key: string): void;
    remove(key: string): void;
    private _indexOf;
    find(id: unknown): T;
    findBy(predicate: (item: T) => boolean): T;
    setState(next: T[]): void;
    subscribe(listener: Listener<T[]>): () => boolean;
}

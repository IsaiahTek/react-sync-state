"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor(initial, key) {
        this.key = 'id';
        this.listeners = new Set();
        this.state = initial;
        if (key) {
            this.key = key;
        }
        queueMicrotask(async () => {
            const { addStore } = await Promise.resolve().then(() => __importStar(require("./synq")));
            addStore(this);
        });
    }
    get snapshot() {
        return this.state;
    }
    add(item) {
        const key = this.key;
        const id = item[key];
        const existingIndex = this.snapshot.findIndex((i) => i[key] === id);
        if (existingIndex !== -1) {
            this.setState(this.snapshot.map((i) => (i[key] === id ? item : i)));
        }
        else {
            this.setState([...this.snapshot, item]);
        }
    }
    update(item, key) {
        const oldState = this.snapshot;
        const index = this._indexOf(key);
        if (index !== -1) {
            oldState[index] = item;
        }
        this.setState(oldState);
    }
    remove(key) {
        const oldState = this.snapshot;
        const index = this._indexOf(key);
        if (index !== -1) {
            oldState.splice(index, 1);
        }
        this.setState(oldState);
    }
    _indexOf(id) {
        return this.state.findIndex((i) => (i[this.key]) === id);
    }
    find(id) {
        return this.state.find((i) => (i[this.key]) === id);
    }
    findBy(predicate) {
        return this.state.find(predicate);
    }
    setState(next) {
        if (Object.is(this.state, next))
            return;
        this.state = next;
        for (const listener of this.listeners) {
            listener(this.state);
        }
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }
}
exports.Store = Store;
//# sourceMappingURL=store.js.map
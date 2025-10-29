# SyncState

<p align="center">
<img src="https://raw.githubusercontent.com/IsaiahTek/react-sync-state/main/images/react_sync_state_cover.svg" />
</p>

**SyncState** is a lightweight, hook-based state management library for React, with powerful, built-in features for **server data synchronization** and **optimistic updates**.

It uses [synq-store](https://synq-store) provides two core store types:
1.  **`Store`**: A minimal, fast, global state container.
2.  **`SynqStore`**: An extended store for managing and synchronizing collections of server-side data (e.g., resources, lists) with automatic fetching, optimistic mutations, and background re-fetching.

---

## 🚀 Features

* **Minimal API:** Simple `useStore` hook for basic state management.
* **Server Synchronization:** The **`SynqStore`** handles data fetching, caching, and server mutations out of the box.
* **Optimistic Updates:** Experience instant UI updates on `add`, `update`, and `remove` operations, with automatic rollback on failure.
* **Interval Re-fetching:** Keep data fresh with automatic background fetching on a defined interval.
* **Microtask Queuing:** Ensures store initialization happens efficiently without blocking the main thread.
* **Framework Agnostic Core:** The core `Store` class can be used outside of React.

---

## 📦 Installation

```bash
# Using npm
npm install syncstate
# Using yarn
yarn add syncstate
```


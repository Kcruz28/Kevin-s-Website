export async function register() {
  if (typeof globalThis !== "undefined") {
    const store = new Map<string, string>();
    const shim = {
      getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
      setItem: (k: string, v: string) => void store.set(k, String(v)),
      removeItem: (k: string) => void store.delete(k),
      clear: () => store.clear(),
      key: (i: number) => Array.from(store.keys())[i] ?? null,
      get length() {
        return store.size;
      },
    };
    try {
      Object.defineProperty(globalThis, "localStorage", {
        value: shim,
        configurable: true,
        writable: true,
      });
    } catch {
      // ignore
    }
    try {
      Object.defineProperty(globalThis, "sessionStorage", {
        value: shim,
        configurable: true,
        writable: true,
      });
    } catch {
      // ignore
    }
  }
}

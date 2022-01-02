interface IStorage {
  get: (key: string) => any;
  post: (key: string, payload: any) => any;
  put: (key: string, payload: any) => any;
  patch: (key: string, payload: any) => any;
  delete: (key: string) => any;
}

export const storage: IStorage = {
  get: (key) => {
    if (!key) {
      return undefined;
    }

    if (
      typeof localStorage !== "undefined" &&
      localStorage.hasOwnProperty(key)
    ) {
      const data = JSON.parse(`${localStorage.getItem(key)}`);
      return data;
    } else {
      return "Key not found";
    }
  },

  post: (key, payload) => {
    if (!key) {
      return undefined;
    }

    if (
      typeof localStorage !== "undefined" &&
      !localStorage.hasOwnProperty(key)
    ) {
      localStorage.setItem(key, JSON.stringify(payload));
    } else {
      return "Key already exists";
    }
  },

  put: (key, payload) => {
    if (!key) {
      return undefined;
    }

    if (
      typeof localStorage !== "undefined" &&
      localStorage.hasOwnProperty(key)
    ) {
      localStorage.setItem(key, JSON.stringify(payload));
    } else {
      return "Key not found";
    }
  },

  patch: (key, payload) => {
    if (!key) {
      return undefined;
    }

    if (
      typeof localStorage !== "undefined" &&
      localStorage.hasOwnProperty(key)
    ) {
      const oldData = storage.get(key);
      const newData = { ...oldData, payload };
      storage.post(key, JSON.stringify(newData));
    } else {
      return "Key not found";
    }
  },

  delete: (key) => {
    if (!key) {
      return undefined;
    }
    if (
      typeof localStorage !== "undefined" &&
      localStorage.hasOwnProperty(key)
    ) {
      localStorage.removeItem(key);
    } else {
      return "Key not found";
    }
  },
};


export interface SetStorageParams<T> {
  key: string;
  value: T;
}

export const setStorage = async <T>({ key, value }: SetStorageParams<T>) => {
  "use client"
  try {
    const data = JSON.stringify(value);
    console.log(data)
    await localStorage.setItem(key, data);
  } catch (e) {
    console.log(e);
    throw new Error("setStorage 에러 발생");
  }
};

export const getStorage = <T>(key: string) => {
  "use client"
  try {
    const item = localStorage.getItem(key);
    if (item) {
      const result: T = JSON.parse(item)
      return result;
    }
    return null;
  } catch (e) {
    console.log(e);
    throw new Error("getStorage 에러 발생");
  }
};

export const removeStorage = async (key: string) => {
  try {
    const item = await getStorage(key);
    if (item) {
      localStorage.removeItem(key);
    }
  } catch (e) {
    console.log(e);
    throw new Error("localStorage에 맞는 토큰이 없습니다.");
  }
};

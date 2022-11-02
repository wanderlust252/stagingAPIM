export function setStorageItem(key: string, value: string) {
  window.localStorage.setItem(key, value);
}

export function getStorageItem(key: string) {
  return window.localStorage.getItem(key);
}

export function removeStorageItem(key: string) {
  // Removes the key/value pair with the given key
  return window.localStorage.removeItem(key);
}

export function clearStorageItems() {
  // Remove all local storage items
  return window.localStorage.clear();
}

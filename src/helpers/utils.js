export function isObject(data) {
  return typeof data === "object" && !Array.isArray(data) && data !== null;
}
export function isEmptyObject(data) {
  return Object.entries(data).length === 0;
}
export function convertToArray(object) {
  if (!isObject(object) || isEmptyObject(object)) {
    throw new Error("You must provide a valid non-empty object");
  }
  return Object.values(object);
}

export const isIdentical = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      return false;
    }
  }
  return true;
};

export function mapArrayToObject(arr) {
  const cache = {};
  for (const element of arr) {
    if (cache[element]) {
      cache[element]++;
    } else {
      cache[element] = 1;
    }
  }
  return cache;
}

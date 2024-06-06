let buckets = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

const HashMap = () => {
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  function set(key, value) {
    let index = hash(key) % 16;
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (buckets[index] === null) {
      buckets[index] = [key, value];
    } else {
      buckets[index][1] = value;
    }
  }
  function get(key) {
    let index = hash(key) % 16;
    if (buckets[index] !== null) {
      return buckets[index][1];
    }
    else {
      return null;
    }
  }
  function has(key) {
    let index = hash(key) % 16;
    if (buckets[index][0] === key) {
      return true;
    } else {
      return false;
    }
  }
  function remove(key) {
    let index = hash(key) % 16;
    if (buckets[index][0] === key) {
      buckets.splice(1, index);
      return true;
    } else {
      return false;
    }
  }
  function length() {
    let len = 0;
    buckets.forEach((bucket) => {
      if (bucket != null) {
        len++;
      }
    });
    return len;
  }
  function clear() {
    buckets.forEach((bucket) => buckets.pop());
    return true;
  }

  function keys() {
    let keys = [];
    buckets.forEach((bucket) => {
      if (bucket != null) {
        keys.push(bucket[0]);
      }
    });
    return keys;
  }
  function values() {
    let values = [];
    buckets.forEach((bucket) => {
      if (bucket != null) {
        values.push(bucket[1]);
      }
    });
    return values;
  }
  function entries() {
    let entries = [];
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        entries.push(bucket);
      }
    });
    return entries;
  }
  return { hash, set, values, entries, has, keys, clear, length, remove, get };
};

HashMap().set("Fred", "Smith");
HashMap().set("Leo", "Das");
console.log("entries(): " + HashMap().entries());
console.log("get(): " + HashMap().get("Leo"));
console.log("has() :" + HashMap().has("Leo"));
console.log("remove(): " + HashMap().remove("Leo"));
console.log("entries(): " + HashMap().entries());
console.log("length(): " + HashMap().length());
console.log("clear(): " + HashMap().clear());
console.log("entries(): " + HashMap().entries());
console.log("keys(): " + HashMap().keys());
console.log("values(): " + HashMap().values());
console.log("entries(): " + HashMap().entries());

import { isArray } from "./isArray";
import { checkType } from "./checkType";

const deepClone = function (source) {
  let result;
  if (isArray(source)) {
    // 数组类型
    result = [];
    source.forEach((el) => {
      result.push(deepClone(el));
    });
  } else if (checkType(source) === "Object") {
    result = {};
    for (let key in source) {
      result[key] = deepClone(source[key]);
    }
  } else if (checkType(source) === "Function") {
    var str = "return " + source.toString();
    return new Function(str).call(this);
  } else if (checkType(source) === "Set") {
    let set = new Set();
    source.forEach((val) => {
      set.add(deepClone(val));
    });
    return set;
  } else if (checkType(source) === "Map") {
    let map = new Map();
    source.forEach((val, key) => {
      map.set(key, deepClone(val));
    });
    return map;
  } else if (checkType(source) === "Date") {
    return new Date(source.valueOf());
  } else if (checkType(source) === "RegExp") {
    return new RegExp(source);
  } else {
    result = source;
  }
  return result;
};

export { deepClone };

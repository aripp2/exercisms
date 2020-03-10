//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return new List(this.values);
  }

  concat(lists) {
    // console.log('lists before if', lists)
    if (lists.values.length > 1) {
      this.values = lists.values.reduce((acc, list) => {
        console.log('list.values in reduce', list.values)
        console.log('acc in reduce', acc)
        acc = [...acc, ...list.values];
        return acc;
      }, [])
      return this.values;
    }
    return this.append(lists);

  }

  filter() {
    throw new Error("Remove this statement and implement this function");
  }

  map() {
    throw new Error("Remove this statement and implement this function");
  }

  length() {
    throw new Error("Remove this statement and implement this function");
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}

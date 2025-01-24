clientInfo = {
    name: 'John Smith',
    age: 27,
    amount: 5000,
    purchases: 15,
    sum() {
        let total = 0;
        for (let value of Object.values(this)) {
            if (typeof value === 'number') {
                total += value;
            }
        }
        return total;
    },
    getKeysDescendingOrder() {
      let emptyArr = [];
      
      let entries = Object.entries(this);
      for (let [key, value] of entries) {
        if (typeof value === 'number') {
            emptyArr.push([key, value]);
        }
      }
      emptyArr.sort((a,b) => b[1] - a[1]);
      const newArr= emptyArr.map(elem => elem[0]);
      return newArr;
    }
};

console.log(clientInfo.getKeysDescendingOrder());




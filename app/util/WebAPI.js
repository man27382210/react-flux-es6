export default {
  getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        var obj = {};
        ['Item 1', 'Item 2', 'Item 3'].map((item, i) => {
          obj[i] = {label: item, count: 1};
          return {
            id: i,
            label: item
          };
        });
        resolve(obj);
      }, 500);
    });
  }
};

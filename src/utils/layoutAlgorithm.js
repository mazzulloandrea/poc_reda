/**
 *
 */

const layoutAlgorithm = (users) => {
  const size = users.length;
  // trova il resto maggiore oppure resto = 0
  let division = 5;
  let resto = size % division;
  let candidate = [division, resto];
  while (division > 3) {
    if (resto === 0) {
      candidate = [division, resto];
      break;
    } else {
      division--;
      const newResto = size % division;
      if (newResto > resto || newResto === 0) {
        resto = newResto;
        candidate = [division, resto];
      }
    }
  }
  return _layoutRows(candidate, users);
};

const _layoutRows = (layoutData, users) => {
  let rows = [];
  let row = [];
  const lastRow = layoutData[1];
  for (let i = 0; i < users.length - lastRow; i++) {
    row.push(users[i]);
    if (row.length === layoutData[0]) {
      rows.push(row);
      row = [];
    }
  }
  row = [];
  for (let i = users.length - lastRow; i < users.length; i++) {
    row.push(users[i]);
  }
  if (row.length) {
    rows.push(row);
  }
  return rows;
};

export default layoutAlgorithm;

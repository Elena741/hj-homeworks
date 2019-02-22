'use strict';
function handleTableClick(event) {

  const propName = event.target.dataset.propName;

  if (event.target.dataset.dir === '1') {
    event.target.dataset.dir = "-1"
  }
  else {
    event.target.dataset.dir = "1";
  }

  table.dataset.sortBy = propName;
  sortTable(propName, event.target.dataset.dir);

}
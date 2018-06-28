import React from 'react';

import ListTable from './ListTable';

const List = ({ listName, listData, onSwitchMode}) => {
  const singleList = listName.slice(0, -1);
  return (
    <div>
      <ListTable 
        listData = {listData}
      />
      <a 
        className="btn btn-primary" 
        onClick={() => {
          onSwitchMode(singleList)
        }}
      >
        Add {singleList}
      </a>
    </div>
  )
}

export default List;
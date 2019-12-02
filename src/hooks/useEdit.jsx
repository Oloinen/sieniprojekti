import { useState } from 'react';

const useEdit = () => {
  const [edit, setEdit] = useState(false);

  function moveEdit() {
    setEdit(!edit);
    console.log("Here")
  }

  return {
    edit,
    moveEdit
  }
};

export default useEdit;
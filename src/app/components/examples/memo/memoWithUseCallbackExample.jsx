import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
  useEffect(() => {
    console.log("render");
  });
  return (
    <button className="btn btn-danger mx-2" onClick={onLogOut}>
      LogOut
    </button>
  );
};
LogOutButton.propTypes = {
  onLogOut: PropTypes.func
};
function areEquel(prevState, nextState) {
  if (prevState.onLogOut !== nextState.onLogOut) {
    return false;
  }
  return true;
}
const MemoizedLogOutButton = React.memo(LogOutButton, areEquel);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false);
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("auth");
  }, [props]);
  return (
    <>
      <button className="btn btn-danger mx-2" onClick={() => setState(!state)}>
        initiate reRender
      </button>
      <MemoizedLogOutButton onLogOut={handleLogOut} />
    </>
  );
};

export default MemoWithUseCallbackExample;

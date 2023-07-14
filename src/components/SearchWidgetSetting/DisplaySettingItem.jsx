import React from "react";
import Switch from "react-switch";
import { useDispatch } from "react-redux";

const DisplaySettingItem = ({ name, isDisplay, action }) => {
  const dispatch = useDispatch();
  const onChangeSwitch = (checked) => {
    console.log(checked)
    dispatch({type: action.type, payload: checked});
  };
  return (
    <div className="setting-item">
      <p>Display {name}:</p>
      <Switch
        className="switch"
        onChange={onChangeSwitch}
        checked={isDisplay}
        onColor="#ff7d60"
        height={20}
        width={50}
      />
    </div>
  );
};

export default DisplaySettingItem;

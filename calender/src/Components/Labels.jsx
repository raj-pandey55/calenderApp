import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import classNames from "classnames";

function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);

  const labelClassesColor = {
    indigo: 'rgb(99 102 241)',
    green: 'rgb(34 197 94)',
    red: "rgb(239 68 68)",
    purple: "rgb(168 85 247)",
    blue: "rgb(59 130 246)",
    orange: "rgb(249 115 22)",
  }; 

  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({label: lbl, checked: !checked}) }
            className={`form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer`}
            style={{backgroundColor: labelClassesColor[lbl]}}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
}

export default Labels;

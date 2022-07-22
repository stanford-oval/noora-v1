import React from "react";

export default function Technical({ convoState }: any) {
  return (
    <div className="px-1 mt-1 text-gray-700">
      <div>
        <span className="font-bold">Current turn: </span>
        {convoState.value.turn}
      </div>
      {[
        {
          name: "Temperature",
          min: 0,
          max: 1,
          propertyName: "temperature",
        },
        {
          name: "Frequency Penalty",
          min: 0,
          max: 2,
          propertyName: "frequencyPenalty",
        },
        {
          name: "Presence Penalty",
          min: 0,
          max: 2,
          propertyName: "presencePenalty",
        },
      ].map((parameter: any) => (
        <div key={parameter.name}>
          <div className="flex items-stretch mt-1">
            <label htmlFor={parameter.propertyName} className="font-bold">
              {parameter.name}:
            </label>
            <div className="ml-auto">
              {convoState.value.model[parameter.propertyName]}
            </div>
          </div>
          <input
            id={parameter.propertyName}
            type="range"
            min={parameter.min}
            max={parameter.max}
            defaultValue={convoState.value.model[parameter.propertyName]}
            onChange={(e: any) => {
              convoState.setValue((cs: any) => ({
                ...cs,
                model: {
                  ...cs.model,
                  [parameter.propertyName]: Number(e.target.value),
                },
              }));
            }}
            step="0.01"
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300 gray-slider-thumb"
          />
        </div>
      ))}
    </div>
  );
}

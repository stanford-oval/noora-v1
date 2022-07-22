import React from "react";

export default function Technical({ convoState }: any) {
  return (
    <div className="px-1 mt-1 text-gray-700">
      <div>
        <span className="font-bold">Current turn: </span>
        {convoState.value.turn}
      </div>

      <div className="border-gray-300 bg-gray-300 border-1 my-1.5"></div>

      <div className="mt-1">
        <div>
          <div className="flex items-stretch mt-1">
            <label htmlFor={"numProblems"} className="font-bold">
              &#35; Problems:
            </label>
            <div className="ml-auto">{convoState.value.numProblems}</div>
          </div>
          <input
            id={"numProblems"}
            type="range"
            min={convoState.value.progress.length + 1}
            max={Math.max(convoState.value.progress.length + 1, 20)}
            defaultValue={convoState.value.numProblems}
            disabled={convoState.value.turn != "user-answer"}
            onChange={(e: any) => {
              convoState.setValue((cs: any) => ({
                ...cs,
                numProblems: Number(e.target.value),
              }));
            }}
            step="1"
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300 gray-slider-thumb"
          />
        </div>
      </div>

      <div className="border-gray-300 bg-gray-300 border-1 my-1.5"></div>

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
        <Slider
          key={parameter.name}
          parameter={parameter}
          convoState={convoState}
        />
      ))}
    </div>
  );
}

function Slider({ parameter, convoState }: any) {
  return (
    <div>
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
        disabled={convoState.value.turn != "user-answer"}
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
  );
}

import React, { useState } from "react";
import "./Grid.css";

const Grid = () => {
  const [columns, setColumns] = useState(2);
  const [boxes, setBoxes] = useState([]);
  const [index, setIndex] = useState(1);

  const handleAddBox = () => {
    setBoxes([...boxes, index]);
    setIndex(index + 1);
  };

  const handleRemoveBox = (boxIndex) => {
    const updatedBoxes = boxes.filter((box) => box !== boxIndex);
    setBoxes(updatedBoxes);
  };

  const handleReset = () => {
    setBoxes([]);
    setColumns(2);
    setIndex(1);
  };

  return (
    <div className="grid-container">
      <div className="controls">
        <select
          onChange={(e) => setColumns(parseInt(e.target.value, 10))}
          value={columns}
        >
          <option value={2}>2 Columns</option>
          <option value={3}>3 Columns</option>
          <option value={4}>4 Columns</option>
        </select>
        <button onClick={handleAddBox}>Add Box</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="grid">
        {boxes.map((box) => (
          <div key={box} className="box">
            <span className="custom-padding">{box}</span>
            <button onClick={() => handleRemoveBox(box)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

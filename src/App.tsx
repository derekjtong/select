import { useState } from "react";
import Select, { SelectOption } from "./Select";

const options = [
  {
    label: "First",
    value: 1,
  },
  {
    label: "Second",
    value: 2,
  },
  {
    label: "Third",
    value: 3,
  },
  {
    label: "Fourth",
    value: 4,
  },
];

function App() {
  const [value, setValue] = useState<SelectOption | undefined>(options[0]);
  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);
  return (
    <h1>
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
      <Select
        multiple
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
    </h1>
  );
}

export default App;

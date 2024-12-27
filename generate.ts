import * as fs from "fs";
import * as path from "path";

// Configuration
const COMPONENTS_DIR = "./src/components";
const NUM_COMPONENTS = 5000;

// Ensure the components directory exists
if (!fs.existsSync(COMPONENTS_DIR)) {
  fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
}

// Component template
const getComponentTemplate = (index: number) => `
import React from 'react';

interface Component${index}Props {
    value: number;
    onValueChange: (newValue: number) => void;
}

export const Component${index}: React.FC<Component${index}Props> = ({ value, onValueChange }) => {
    return (
        <div className="p-4 border rounded-md">
            <h2 className="text-lg font-bold">Component ${index}</h2>
            <div className="flex items-center gap-2 mt-2">
                <button 
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                    onClick={() => onValueChange(value - 1)}
                >
                    -
                </button>
                <span>{value}</span>
                <button 
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                    onClick={() => onValueChange(value + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
};
`;

// Generate individual component files
for (let i = 0; i < NUM_COMPONENTS; i++) {
  const componentContent = getComponentTemplate(i);
  const filePath = path.join(COMPONENTS_DIR, `Component${i}.tsx`);
  fs.writeFileSync(filePath, componentContent);
  console.log(`Generated Component${i}.tsx`);
}

// Generate barrel file that imports and uses all components
const barrelContent = `
import React, { useState } from 'react';
${Array.from(
  { length: NUM_COMPONENTS },
  (_, i) => `import { Component${i} } from './Component${i}';`
).join("\n")}

export const ComponentsWrapper: React.FC = () => {
    const [values, setValues] = useState<number[]>(
        Array.from({ length: ${NUM_COMPONENTS} }, () => 0)
    );

    const handleValueChange = (index: number, newValue: number) => {
        const newValues = [...values];
        newValues[index] = newValue;
        setValues(newValues);
    };

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            ${Array.from(
              { length: NUM_COMPONENTS },
              (_, i) =>
                `<Component${i}
                    key={${i}}
                    value={values[${i}]}
                    onValueChange={(newValue) => handleValueChange(${i}, newValue)}
                />`
            ).join("\n            ")}
        </div>
    );
};
`;

fs.writeFileSync(path.join(COMPONENTS_DIR, "index.tsx"), barrelContent);

console.log("Generated index.tsx barrel file");
console.log("Done!");

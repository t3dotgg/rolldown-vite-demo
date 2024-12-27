
import React, { useState } from 'react';
import { Component0 } from './Component0';
import { Component1 } from './Component1';
import { Component2 } from './Component2';
import { Component3 } from './Component3';
import { Component4 } from './Component4';
import { Component5 } from './Component5';
import { Component6 } from './Component6';
import { Component7 } from './Component7';
import { Component8 } from './Component8';
import { Component9 } from './Component9';
import { Component10 } from './Component10';
import { Component11 } from './Component11';
import { Component12 } from './Component12';
import { Component13 } from './Component13';
import { Component14 } from './Component14';
import { Component15 } from './Component15';
import { Component16 } from './Component16';
import { Component17 } from './Component17';
import { Component18 } from './Component18';
import { Component19 } from './Component19';
import { Component20 } from './Component20';
import { Component21 } from './Component21';
import { Component22 } from './Component22';
import { Component23 } from './Component23';
import { Component24 } from './Component24';
import { Component25 } from './Component25';
import { Component26 } from './Component26';
import { Component27 } from './Component27';
import { Component28 } from './Component28';
import { Component29 } from './Component29';
import { Component30 } from './Component30';
import { Component31 } from './Component31';
import { Component32 } from './Component32';
import { Component33 } from './Component33';
import { Component34 } from './Component34';
import { Component35 } from './Component35';
import { Component36 } from './Component36';
import { Component37 } from './Component37';
import { Component38 } from './Component38';
import { Component39 } from './Component39';
import { Component40 } from './Component40';
import { Component41 } from './Component41';
import { Component42 } from './Component42';
import { Component43 } from './Component43';
import { Component44 } from './Component44';
import { Component45 } from './Component45';
import { Component46 } from './Component46';
import { Component47 } from './Component47';
import { Component48 } from './Component48';
import { Component49 } from './Component49';

export const ComponentsWrapper: React.FC = () => {
    const [values, setValues] = useState<number[]>(
        Array.from({ length: 50 }, () => 0)
    );

    const handleValueChange = (index: number, newValue: number) => {
        const newValues = [...values];
        newValues[index] = newValue;
        setValues(newValues);
    };

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            <Component0
                    key={0}
                    value={values[0]}
                    onValueChange={(newValue) => handleValueChange(0, newValue)}
                />
            <Component1
                    key={1}
                    value={values[1]}
                    onValueChange={(newValue) => handleValueChange(1, newValue)}
                />
            <Component2
                    key={2}
                    value={values[2]}
                    onValueChange={(newValue) => handleValueChange(2, newValue)}
                />
            <Component3
                    key={3}
                    value={values[3]}
                    onValueChange={(newValue) => handleValueChange(3, newValue)}
                />
            <Component4
                    key={4}
                    value={values[4]}
                    onValueChange={(newValue) => handleValueChange(4, newValue)}
                />
            <Component5
                    key={5}
                    value={values[5]}
                    onValueChange={(newValue) => handleValueChange(5, newValue)}
                />
            <Component6
                    key={6}
                    value={values[6]}
                    onValueChange={(newValue) => handleValueChange(6, newValue)}
                />
            <Component7
                    key={7}
                    value={values[7]}
                    onValueChange={(newValue) => handleValueChange(7, newValue)}
                />
            <Component8
                    key={8}
                    value={values[8]}
                    onValueChange={(newValue) => handleValueChange(8, newValue)}
                />
            <Component9
                    key={9}
                    value={values[9]}
                    onValueChange={(newValue) => handleValueChange(9, newValue)}
                />
            <Component10
                    key={10}
                    value={values[10]}
                    onValueChange={(newValue) => handleValueChange(10, newValue)}
                />
            <Component11
                    key={11}
                    value={values[11]}
                    onValueChange={(newValue) => handleValueChange(11, newValue)}
                />
            <Component12
                    key={12}
                    value={values[12]}
                    onValueChange={(newValue) => handleValueChange(12, newValue)}
                />
            <Component13
                    key={13}
                    value={values[13]}
                    onValueChange={(newValue) => handleValueChange(13, newValue)}
                />
            <Component14
                    key={14}
                    value={values[14]}
                    onValueChange={(newValue) => handleValueChange(14, newValue)}
                />
            <Component15
                    key={15}
                    value={values[15]}
                    onValueChange={(newValue) => handleValueChange(15, newValue)}
                />
            <Component16
                    key={16}
                    value={values[16]}
                    onValueChange={(newValue) => handleValueChange(16, newValue)}
                />
            <Component17
                    key={17}
                    value={values[17]}
                    onValueChange={(newValue) => handleValueChange(17, newValue)}
                />
            <Component18
                    key={18}
                    value={values[18]}
                    onValueChange={(newValue) => handleValueChange(18, newValue)}
                />
            <Component19
                    key={19}
                    value={values[19]}
                    onValueChange={(newValue) => handleValueChange(19, newValue)}
                />
            <Component20
                    key={20}
                    value={values[20]}
                    onValueChange={(newValue) => handleValueChange(20, newValue)}
                />
            <Component21
                    key={21}
                    value={values[21]}
                    onValueChange={(newValue) => handleValueChange(21, newValue)}
                />
            <Component22
                    key={22}
                    value={values[22]}
                    onValueChange={(newValue) => handleValueChange(22, newValue)}
                />
            <Component23
                    key={23}
                    value={values[23]}
                    onValueChange={(newValue) => handleValueChange(23, newValue)}
                />
            <Component24
                    key={24}
                    value={values[24]}
                    onValueChange={(newValue) => handleValueChange(24, newValue)}
                />
            <Component25
                    key={25}
                    value={values[25]}
                    onValueChange={(newValue) => handleValueChange(25, newValue)}
                />
            <Component26
                    key={26}
                    value={values[26]}
                    onValueChange={(newValue) => handleValueChange(26, newValue)}
                />
            <Component27
                    key={27}
                    value={values[27]}
                    onValueChange={(newValue) => handleValueChange(27, newValue)}
                />
            <Component28
                    key={28}
                    value={values[28]}
                    onValueChange={(newValue) => handleValueChange(28, newValue)}
                />
            <Component29
                    key={29}
                    value={values[29]}
                    onValueChange={(newValue) => handleValueChange(29, newValue)}
                />
            <Component30
                    key={30}
                    value={values[30]}
                    onValueChange={(newValue) => handleValueChange(30, newValue)}
                />
            <Component31
                    key={31}
                    value={values[31]}
                    onValueChange={(newValue) => handleValueChange(31, newValue)}
                />
            <Component32
                    key={32}
                    value={values[32]}
                    onValueChange={(newValue) => handleValueChange(32, newValue)}
                />
            <Component33
                    key={33}
                    value={values[33]}
                    onValueChange={(newValue) => handleValueChange(33, newValue)}
                />
            <Component34
                    key={34}
                    value={values[34]}
                    onValueChange={(newValue) => handleValueChange(34, newValue)}
                />
            <Component35
                    key={35}
                    value={values[35]}
                    onValueChange={(newValue) => handleValueChange(35, newValue)}
                />
            <Component36
                    key={36}
                    value={values[36]}
                    onValueChange={(newValue) => handleValueChange(36, newValue)}
                />
            <Component37
                    key={37}
                    value={values[37]}
                    onValueChange={(newValue) => handleValueChange(37, newValue)}
                />
            <Component38
                    key={38}
                    value={values[38]}
                    onValueChange={(newValue) => handleValueChange(38, newValue)}
                />
            <Component39
                    key={39}
                    value={values[39]}
                    onValueChange={(newValue) => handleValueChange(39, newValue)}
                />
            <Component40
                    key={40}
                    value={values[40]}
                    onValueChange={(newValue) => handleValueChange(40, newValue)}
                />
            <Component41
                    key={41}
                    value={values[41]}
                    onValueChange={(newValue) => handleValueChange(41, newValue)}
                />
            <Component42
                    key={42}
                    value={values[42]}
                    onValueChange={(newValue) => handleValueChange(42, newValue)}
                />
            <Component43
                    key={43}
                    value={values[43]}
                    onValueChange={(newValue) => handleValueChange(43, newValue)}
                />
            <Component44
                    key={44}
                    value={values[44]}
                    onValueChange={(newValue) => handleValueChange(44, newValue)}
                />
            <Component45
                    key={45}
                    value={values[45]}
                    onValueChange={(newValue) => handleValueChange(45, newValue)}
                />
            <Component46
                    key={46}
                    value={values[46]}
                    onValueChange={(newValue) => handleValueChange(46, newValue)}
                />
            <Component47
                    key={47}
                    value={values[47]}
                    onValueChange={(newValue) => handleValueChange(47, newValue)}
                />
            <Component48
                    key={48}
                    value={values[48]}
                    onValueChange={(newValue) => handleValueChange(48, newValue)}
                />
            <Component49
                    key={49}
                    value={values[49]}
                    onValueChange={(newValue) => handleValueChange(49, newValue)}
                />
        </div>
    );
};

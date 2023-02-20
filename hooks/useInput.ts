import { useState } from 'react';

export const useInput = function <T>(initValue: T, validator?: (currentValue: T) => boolean): { value: T; onChange: (e: any) => void; onReset: () => void } {
    const [value, setValue] = useState<T>(initValue);

    const onChange = (e: any) => {
        const {
            target: { value: _value },
        } = e;
        let willUpdate = true;

        if (typeof validator === 'function') {
            willUpdate = validator(_value);
        }
        if (willUpdate) {
            setValue(_value);
        }
    };

    const onReset = () => {
        setValue(initValue);
    };

    return { value, onChange, onReset };
};

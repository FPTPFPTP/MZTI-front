import { useMemo } from 'react';
import { ProgressLineBarContainer, ProgressBar } from './styled';
import classNames from 'classnames';

interface IProgressLineBarProps {
    percent: number;
    totalStep: number;
    color?: string;
}

const ProgressLineBar = (props: IProgressLineBarProps) => {
    const { percent, totalStep, color } = props;

    const stepNumbers = useMemo(() => {
        return Array.from({ length: totalStep }, (_, index) => index + 1);
    }, [totalStep]);

    return (
        <div css={ProgressLineBarContainer}>
            {stepNumbers.map((number) => (
                <div key={number} css={ProgressBar(color)} className={classNames(percent > number - 1 && 'active')} />
            ))}
        </div>
    );
};

export default ProgressLineBar;

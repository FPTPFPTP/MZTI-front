import { ProgressLineBarContainer, ProgressBar } from './styled';
import classNames from 'classnames';

interface IProgressLineBarProps {
    percent: number;
}

const ProgressLineBar = (props: IProgressLineBarProps) => {
    const { percent } = props;

    return (
        <div css={ProgressLineBarContainer}>
            <div css={ProgressBar} className={classNames(percent > 0 && 'active')} />
            <div css={ProgressBar} className={classNames(percent > 1 && 'active')} />
            <div css={ProgressBar} className={classNames(percent > 2 && 'active')} />
        </div>
    );
};

export default ProgressLineBar;

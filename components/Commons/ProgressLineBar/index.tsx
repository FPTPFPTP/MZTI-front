import { ProgressLineBarContainer, ProgressBar } from './styled';

interface IProgressLineBarProps {
    percent: number;
}

const ProgressLineBar = (props: IProgressLineBarProps) => {
    const { percent } = props;

    return (
        <div css={ProgressLineBarContainer}>
            <div css={ProgressBar(percent)} />
        </div>
    );
};

export default ProgressLineBar;

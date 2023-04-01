import { ProgressUl } from '../styled';

const StepProgressBar = ({ items, active }: { items: string[]; active: number }) => {
    return (
        <ul css={ProgressUl}>
            {items.map((_, index) => (
                <li key={index} className={index + 1 <= active ? 'active' : ''}></li>
            ))}
        </ul>
    );
};

export default StepProgressBar;

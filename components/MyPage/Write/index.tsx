type Props = {
    write: number; // 작성한 글
    comment: number; // 작성한 댓글
    recommend: number; // 받은 추천
};
const Write = ({ write, comment, recommend }: Props) => {
    return (
        <section>
            <ul>
                <li>
                    <p>작성한 글</p>
                    <button>{write}</button>
                </li>
                <li>
                    <p>작성한 댓글</p>
                    <button>{comment}</button>
                </li>
                <li>
                    <p>받은 추천</p>
                    <button>{recommend}</button>
                </li>
            </ul>
        </section>
    );
};

export default Write;

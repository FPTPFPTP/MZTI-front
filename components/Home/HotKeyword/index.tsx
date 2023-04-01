import { HotKeywordStyle } from '../styled';

const HotKeyword = () => {
    return (
        <section css={HotKeywordStyle}>
            <div className="keyowordBox__content">
                <h3>🔥 실시간 HOT 키워드</h3>

                <ul className="keyword">
                    <li>권고사직</li>
                    <li>미세먼지</li>
                    <li>더글로리</li>
                </ul>
            </div>
        </section>
    );
};

export default HotKeyword;

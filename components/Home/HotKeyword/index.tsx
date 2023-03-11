import { useState } from 'react';
import { HotKeywordStyle } from './styled';

const HotKeyword = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleFilter = () => {
        setIsOpen((isOpen) => !isOpen);
    };
    return (
        <section css={HotKeywordStyle}>
            <div className="keyowordBox">
                <div className="keyowordBox__header">
                    <h3>🔥 실시간 HOT 키워드</h3>
                    <button onClick={handleFilter} className="keyowordBox__header--button">
                        24시간 내
                    </button>

                    {isOpen && (
                        <ul className="filterList">
                            <li>
                                <button>24시간 내</button>
                            </li>
                            <li>
                                <button>일주일 내</button>
                            </li>
                            <li>
                                <button>한달 내</button>
                            </li>
                        </ul>
                    )}
                </div>

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

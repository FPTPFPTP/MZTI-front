import { useEffect, useState } from 'react';
import { Container, RadioTileGroup } from './styled';

const MbtiTouch = () => {
    const [EOrISelect, setEOrISelect] = useState<any>();
    const [SOrNSelect, setSOrNSelect] = useState<any>();
    const [TOrFSelect, setTOrFSelect] = useState<any>();
    const [POrJSelect, setPOrJSelect] = useState<any>();

    useEffect(() => {
        console.log({ EOrISelect });
    }, [EOrISelect]);

    useEffect(() => {
        console.log({ SOrNSelect });
    }, [SOrNSelect]);

    useEffect(() => {
        console.log({ TOrFSelect });
    }, [TOrFSelect]);

    useEffect(() => {
        console.log({ POrJSelect });
    }, [POrJSelect]);

    return (
        <div css={Container}>
            <div css={RadioTileGroup}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log('e', e);
                    }}
                >
                    <fieldset className="input-container">
                        <input className="radio-button" type="radio" name="radio" value={'E'} onChange={(e) => setEOrISelect(e.target.value)} />
                        <div className="radio-tile">
                            <label htmlFor="walk" className="radio-tile-label">
                                E
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="input-container">
                        <input className="radio-button" type="radio" name="radio" value={'I'} onChange={(e) => setEOrISelect(e.target.value)} />
                        <div className="radio-tile">
                            <label htmlFor="bike" className="radio-tile-label">
                                I
                            </label>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div css={RadioTileGroup}>
                <form>
                    <div className="input-container">
                        <input id="walk" className="radio-button" type="radio" name="radio" value={'S'} onChange={(e) => setSOrNSelect(e.target.value)} />
                        <div className="radio-tile">
                            <label htmlFor="walk" className="radio-tile-label">
                                S
                            </label>
                        </div>
                    </div>

                    <div className="input-container">
                        <input id="bike" className="radio-button" type="radio" name="radio" value={'N'} onChange={(e) => setSOrNSelect(e.target.value)} />
                        <div className="radio-tile">
                            <label htmlFor="bike" className="radio-tile-label">
                                N
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div css={RadioTileGroup}>
                <form>
                    <div className="input-container">
                        <input id="walk" className="radio-button" type="radio" name="radio" value={'T'} onChange={(e) => setTOrFSelect(e.target.value)} />
                        <div className="radio-tile">
                            <label htmlFor="walk" className="radio-tile-label">
                                T
                            </label>
                        </div>
                    </div>

                    <div className="input-container">
                        <input id="bike" className="radio-button" type="radio" name="radio" value={'F'} onChange={(e) => setTOrFSelect(e.target.value)} />
                        <div className="radio-tile">
                            <label htmlFor="bike" className="radio-tile-label">
                                F
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div css={RadioTileGroup}>
                <form>
                    <div className="input-container">
                        <input id="walk" className="radio-button" type="radio" name="radio" value={'J'} onChange={(e) => setPOrJSelect(e.target.value)} />
                        <div className="radio-tile">
                            <label htmlFor="walk" className="radio-tile-label">
                                J
                            </label>
                        </div>
                    </div>

                    <div className="input-container">
                        <input id="bike" className="radio-button" type="radio" name="radio" value={'P'} onChange={(e) => setPOrJSelect(e.target.value)} />
                        <div className="radio-tile">
                            <label htmlFor="bike" className="radio-tile-label">
                                P
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MbtiTouch;

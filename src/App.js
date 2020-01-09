import React from 'react';

const App = () => {
    const [pokerValue, setPokerValue] = React.useState(0);
    const values = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256];

    return (
        <>
            <select
                onChange={e => setPokerValue(e.target.value)}
                value={pokerValue}
            >
                {values.map(item => (
                    <option
                        key={item}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
            <p>{pokerValue}</p>
        </>
    );
}

export default App;

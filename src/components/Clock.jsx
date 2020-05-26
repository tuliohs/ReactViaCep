import React, { useState } from 'react';

function Clock() {
    const [data, setData] = useState({ date: "" });
    setInterval(
        () => tick(),
        1000
    );
    const tick = e => {
        setData({
            date: new Date().toLocaleTimeString()
        });
    }
    return (
        <div>
            <h3 className="tClock">{data.date}</h3>
        </div>
    );
}
export default Clock;
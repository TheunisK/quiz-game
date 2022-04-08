import { React, useState, useEffect } from 'react';
import { Line } from 'rc-progress';


function TimerBar() {
    
    const [percent, setPercent] = useState(0);

    useEffect(() => {
      const progress = setTimeout(() => {
        setPercent(percent + 0.1);
      }, 2)
      if (percent === 100) {
        clearTimeout(progress);
      }
    }, [percent]);

    return (
        <div className="timer-bar-container">
          <Line percent={percent} strokeWidth='2' strokeColor="#0197F6"/>
        </div>
    );
};

export default TimerBar;
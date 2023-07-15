import React from 'react';
import { Line, Circle } from 'rc-progress';

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 10,
            color: '#3FC7FA',
        };
        this.changeState = this.changeState.bind(this);
        this.changeIncrease = this.changeIncrease.bind(this);
        this.changeReduce = this.changeReduce.bind(this);
    }

    changeState() {
        const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
        const value = parseInt((Math.random() * 100).toString(), 10);
        this.setState({
            percent: value,
            color: colorMap[parseInt((Math.random() * 3).toString(), 10)],
        });
    }

    changeIncrease() {
        this.setState(({ percent }) => {
            let newPercent = percent + 1
            if (percent > 100) {
                percent = 100;
            }
            return {
                percent: newPercent,
            };
        });
    }

    changeReduce() {
        this.setState(({ percent }) => {
            let newPercent = percent - 1
            if (percent < 10) {
                percent = 10;
            }
            return {
                percent: newPercent,
            };
        });
    }

    render() {
        const { percent, color } = this.state;
        const containerStyle = {
            width: '250px',
        };
        const circleContainerStyle = {
            width: '250px',
            height: '250px',
            display: 'inline-block',
        };
        const isReduceDisabled = percent === 10; // Check if the percent is at 10%

        return (
            <div>
                <h3>Line Progress {percent}%</h3>
                <div style={containerStyle}>
                    <Line percent={percent} strokeWidth={4} strokeColor={color} />
                    <br />
                    <div style={{
                        background: `linear-gradient(90deg, #0700b8 0%, #00ff88 ${percent}%, #555 ${percent}%, #555 100%)`,
                        height: '6px',
                        borderRadius: '3px',
                        marginTop: '-6px',
                    }}
                    />
                </div>
                <h3>Circle Progress {percent}%</h3>
                <div style={circleContainerStyle}>
                    <Circle percent={percent} strokeWidth={6} strokeLinecap="round" strokeColor={color} />
                </div>
                <div style={circleContainerStyle}>
                    <Circle percent={percent} strokeWidth={6} strokeLinecap="butt" strokeColor={color} />
                </div>
                <div style={circleContainerStyle}>
                    <Circle percent={percent} strokeWidth={6} strokeLinecap="square" strokeColor={color} />
                </div>
                <p>
                    <button type="button" onClick={this.changeState}>
                        Change State
                    </button>
                    <button type="button" onClick={this.changeIncrease}>
                        Increase
                    </button>
                    <button type="button" onClick={this.changeReduce} disabled={isReduceDisabled}>
                        Reduce
                    </button>
                </p>
            </div>
        );
    }
}

export default Loader;

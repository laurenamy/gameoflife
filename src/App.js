import React, {Component} from 'react';
import './css/App.css';
import Board from './Board.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Game of Life</h1>
                    <div className="container">
                    <div className="row">
                      <div className="key col-xs-12 col-sm-3">
                          <ul className="legend-list">
                              <li><strong>Pink:</strong> <em>alive</em></li>
                              <li><strong>Yellow:</strong> <em>dead</em></li>
                              <li><strong>Black:</strong> <em>inactive</em></li>
                          </ul>
                      </div>
                    <Board className="col-xs-12 col-sm-9" />
                    </div>
                    <div className="rules col-xs-12">
                        <h2>Rules</h2>
                        <ol className="rules-list">
                            <li>Any cell with less than 2 live neighbors will die, as if by underpopulation.</li>
                            <li>Any cell with more than 3 live neighbors will die, as if by overpopulation.</li>
                            <li>Any inactive or dead cell with exactly 3 live neighbors will come to life, as if by reproduction.</li>
                        </ol>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

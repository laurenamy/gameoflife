import React, {Component} from 'react';
import Cell from './Cell.js'

var intervalID;

class Board extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }
    componentWillMount() {
        //if there is no board
        if (this.state === null) {
            this.setState({
                "cellboard": [
                    [
                        {
                            "id": 0,
                            "value": 0
                        }, {
                            "id": 1,
                            "value": 0
                        }, {
                            "id": 2,
                            "value": 0
                        }, {
                            "id": 3,
                            "value": 0
                        }, {
                            "id": 4,
                            "value": 0
                        }, {
                            "id": 5,
                            "value": 0
                        }, {
                            "id": 6,
                            "value": 0
                        }, {
                            "id": 7,
                            "value": 0
                        }, {
                            "id": 8,
                            "value": 0
                        }, {
                            "id": 9,
                            "value": 0
                        }
                    ],
                    [
                        {
                            "id": 10,
                            "value": 0
                        }, {
                            "id": 11,
                            "value": 0
                        }, {
                            "id": 12,
                            "value": 0
                        }, {
                            "id": 13,
                            "value": 0
                        }, {
                            "id": 14,
                            "value": 0
                        }, {
                            "id": 15,
                            "value": 0
                        }, {
                            "id": 16,
                            "value": 0
                        }, {
                            "id": 17,
                            "value": 1
                        }, {
                            "id": 18,
                            "value": 0
                        }, {
                            "id": 19,
                            "value": 0
                        }
                    ],
                    [
                        {
                            "id": 20,
                            "value": 0
                        }, {
                            "id": 21,
                            "value": 0
                        }, {
                            "id": 22,
                            "value": 0
                        }, {
                            "id": 23,
                            "value": 0
                        }, {
                            "id": 24,
                            "value": 0
                        }, {
                            "id": 25,
                            "value": 0
                        }, {
                            "id": 26,
                            "value": 0
                        }, {
                            "id": 27,
                            "value": 1
                        }, {
                            "id": 28,
                            "value": 0
                        }, {
                            "id": 29,
                            "value": 0
                        }
                    ],
                    [
                        {
                            "id": 30,
                            "value": 0
                        }, {
                            "id": 31,
                            "value": 0
                        }, {
                            "id": 32,
                            "value": 0
                        }, {
                            "id": 33,
                            "value": 0
                        }, {
                            "id": 34,
                            "value": 0
                        }, {
                            "id": 35,
                            "value": 0
                        }, {
                            "id": 36,
                            "value": 0
                        }, {
                            "id": 37,
                            "value": 1
                        }, {
                            "id": 38,
                            "value": 0
                        }, {
                            "id": 39,
                            "value": 0
                        }
                    ],
                    [
                        {
                            "id": 40,
                            "value": 0
                        }, {
                            "id": 41,
                            "value": 0
                        }, {
                            "id": 42,
                            "value": 0
                        }, {
                            "id": 43,
                            "value": 0
                        }, {
                            "id": 44,
                            "value": 1
                        }, {
                            "id": 45,
                            "value": 1
                        }, {
                            "id": 46,
                            "value": 0
                        }, {
                            "id": 47,
                            "value": 0
                        }, {
                            "id": 48,
                            "value": 0
                        }, {
                            "id": 49,
                            "value": 0
                        }
                    ],
                    [
                        {
                            "id": 50,
                            "value": 0
                        }, {
                            "id": 51,
                            "value": 0
                        }, {
                            "id": 52,
                            "value": 0
                        }, {
                            "id": 53,
                            "value": 0
                        }, {
                            "id": 54,
                            "value": 1
                        }, {
                            "id": 55,
                            "value": 1
                        }, {
                            "id": 56,
                            "value": 0
                        }, {
                            "id": 57,
                            "value": 0
                        }, {
                            "id": 58,
                            "value": 0
                        }, {
                            "id": 59,
                            "value": 0
                        }
                    ],
                    [
                        {
                            "id": 60,
                            "value": 0
                        }, {
                            "id": 61,
                            "value": 0
                        }, {
                            "id": 62,
                            "value": 1
                        }, {
                            "id": 63,
                            "value": 1
                        }, {
                            "id": 64,
                            "value": 0
                        }, {
                            "id": 65,
                            "value": 0
                        }, {
                            "id": 66,
                            "value": 0
                        }, {
                            "id": 67,
                            "value": 0
                        }, {
                            "id": 68,
                            "value": 0
                        }, {
                            "id": 69,
                            "value": 0
                        }
                    ],
                    [
                        {
                            "id": 70,
                            "value": 0
                        }, {
                            "id": 71,
                            "value": 0
                        }, {
                            "id": 72,
                            "value": 1
                        }, {
                            "id": 73,
                            "value": 1
                        }, {
                            "id": 74,
                            "value": 0
                        }, {
                            "id": 75,
                            "value": 0
                        }, {
                            "id": 76,
                            "value": 0
                        }, {
                            "id": 77,
                            "value": 0
                        }, {
                            "id": 78,
                            "value": 0
                        }, {
                            "id": 79,
                            "value": 0
                        }
                    ],
                    [
                        {
                            "id": 80,
                            "value": 0
                        }, {
                            "id": 81,
                            "value": 0
                        }, {
                            "id": 82,
                            "value": 0
                        }, {
                            "id": 83,
                            "value": 0
                        }, {
                            "id": 84,
                            "value": 0
                        }, {
                            "id": 85,
                            "value": 0
                        }, {
                            "id": 86,
                            "value": 0
                        }, {
                            "id": 87,
                            "value": 0
                        }, {
                            "id": 88,
                            "value": 0
                        }, {
                            "id": 89,
                            "value": 0
                        }
                    ],
                    [
                        {
                            "id": 90,
                            "value": 0
                        }, {
                            "id": 91,
                            "value": 0
                        }, {
                            "id": 92,
                            "value": 0
                        }, {
                            "id": 93,
                            "value": 0
                        }, {
                            "id": 94,
                            "value": 0
                        }, {
                            "id": 95,
                            "value": 0
                        }, {
                            "id": 96,
                            "value": 0
                        }, {
                            "id": 97,
                            "value": 0
                        }, {
                            "id": 98,
                            "value": 0
                        }, {
                            "id": 99,
                            "value": 0
                        }
                    ]
                ],
                "generation": 0
            })
        }
    }
    click(currentlyValue, i, j) {
        if (currentlyValue === 0) {
            currentlyValue = 1
        } else if (currentlyValue === 1) {
            currentlyValue = 2
        } else if (currentlyValue === 2) {
            currentlyValue = 0
        }

        var cells = this.state.cellboard
        cells[i][j].value = currentlyValue
        this.setState({cellboard: cells})
    }
    checkNeighbors() {

        var currentState = this.state
        var newState = JSON.parse(JSON.stringify(currentState))

        for (let i = 0; i < currentState.cellboard.length; i++) {
            for (let j = 0; j < currentState.cellboard[i].length; j++) {
                var aliveNeighbors = 0;

                //find corners & sides
                if (i - 1 < 0 && j - 1 < 0) {
                    //top left corner
                    if (currentState.cellboard[i][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j].value === 1) {
                        aliveNeighbors += 1
                    }
                    //decide what happens to cell next gen
                    if (currentState.cellboard[i][j].value === 1) {
                        if (aliveNeighbors < 2) {
                            newState.cellboard[i][j].value = 2
                        } else if ((aliveNeighbors === 2) || (aliveNeighbors === 3)) {
                            newState.cellboard[i][j].value = 1
                        } else if (aliveNeighbors > 3) {}
                    } else {
                        if (aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        }
                    }
                } else if (i + 1 === 10 && j + 1 === 10) {
                    //bottom right corner
                    if (currentState.cellboard[i - 1][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i - 1][j].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }

                    //next gen status
                    if (currentState.cellboard[i][j].value === 1) {
                        if (aliveNeighbors < 2) {
                            newState.cellboard[i][j].value = 2
                        } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        } else if (aliveNeighbors > 3) {
                            newState.cellboard[i][j].value = 2
                        }
                    } else {
                        if (aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        }
                    }

                } else if (i - 1 < 0 && j + 1 === 10) {
                    //top right corner
                    if (currentState.cellboard[i][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j].value === 1) {
                        aliveNeighbors += 1
                    }

                    //next gen status
                    if (currentState.cellboard[i][j].value === 1) {
                        if (aliveNeighbors < 2) {
                            newState.cellboard[i][j].value = 2
                        } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        } else if (aliveNeighbors > 3) {
                            newState.cellboard[i][j].value = 2
                        }
                    } else {
                        if (aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        }
                    }

                } else if (i + 1 === 10 && j - 1 < 0) {
                    //bottom left corner
                    if (currentState.cellboard[i - 1][j].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i - 1][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }

                    //next gen status
                    if (currentState.cellboard[i][j].value === 1) {
                        if (aliveNeighbors < 2) {
                            newState.cellboard[i][j].value = 2
                        } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        } else if (aliveNeighbors > 3) {
                            newState.cellboard[i][j].value = 2
                        }
                    } else {
                        if (aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        }
                    }

                } else if (i - 1 < 0) {
                    //top
                    if (currentState.cellboard[i][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }

                    //next gen status
                    if (currentState.cellboard[i][j].value === 1) {
                        if (aliveNeighbors < 2) {
                            newState.cellboard[i][j].value = 2
                        } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        } else if (aliveNeighbors > 3) {
                            newState.cellboard[i][j].value = 2
                        }
                    } else {
                        if (aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        }
                    }

                } else if (i + 1 === 10) {
                    //bottom
                    if (currentState.cellboard[i][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i - 1][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i - 1][j].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i - 1][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    //next gen status
                    if (currentState.cellboard[i][j].value === 1) {
                        if (aliveNeighbors < 2) {
                            newState.cellboard[i][j].value = 2
                        } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        } else if (aliveNeighbors > 3) {
                            newState.cellboard[i][j].value = 2
                        }
                    } else {
                        if (aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        }
                    }

                } else if (j - 1 < 0) {
                    //left
                    if (currentState.cellboard[i - 1][j].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i - 1][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j].value === 1) {
                        aliveNeighbors += 1
                    }

                    //next gen status
                    if (currentState.cellboard[i][j].value === 1) {
                        if (aliveNeighbors < 2) {
                            newState.cellboard[i][j].value = 2
                        } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        } else if (aliveNeighbors > 3) {
                            newState.cellboard[i][j].value = 2
                        }
                    } else {
                        if (aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        }
                    }
                } else if (j + 1 === 10) {
                    //right
                    if (currentState.cellboard[i - 1][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i - 1][j].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j].value === 1) {
                        aliveNeighbors += 1
                    }

                    //next gen status
                    if (currentState.cellboard[i][j].value === 1) {
                        if (aliveNeighbors < 2) {
                            newState.cellboard[i][j].value = 2
                        } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        } else if (aliveNeighbors > 3) {
                            newState.cellboard[i][j].value = 2
                        }
                    } else {
                        if (aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        }
                    }
                } else {
                    //middle
                    if (currentState.cellboard[i - 1][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i - 1][j].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i - 1][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j - 1].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j].value === 1) {
                        aliveNeighbors += 1
                    }
                    if (currentState.cellboard[i + 1][j + 1].value === 1) {
                        aliveNeighbors += 1
                    }

                    //next gen status
                    if (currentState.cellboard[i][j].value === 1) {
                        if (aliveNeighbors < 2) {
                            newState.cellboard[i][j].value = 2
                        } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        } else if (aliveNeighbors > 3) {
                            newState.cellboard[i][j].value = 2
                        }
                    } else {
                        if (aliveNeighbors === 3) {
                            newState.cellboard[i][j].value = 1
                        } //end if
                    } //end else
                } //end last else
            } //end for j
        } //end for i
        newState.generation += 1
        this.setState(newState)
    } //end checkNeighbors
    startBoard(state) {
        clearInterval(intervalID)
        intervalID = setInterval(this.checkNeighbors.bind(this), 300, this.state)
    }
    stopBoard() {
        clearInterval(intervalID)
    }
    resetBoard(state) {
        clearInterval(intervalID)
        var cells = [];
        var idCount = 0;
        //set initial id numbers
        for (let i = 0; i < 10; i++) {
            cells[i] = [];
            for (let j = 0; j < 10; j++) {
                //set initial values
                cells[i][j] = {
                    id: idCount,
                    value: 0
                };
                idCount++;

            }
        }
        this.setState({cellboard: cells, generation: 0})
    }
    render() {
        var cellboard = this.state.cellboard;
        var counter = 0;
        return (
            <div>
                <div key={counter} className="game-board">

                    {this.state.cellboard.map(function(array, index) {
                        var i = index;
                        return array.map(function(value, index) {
                            var j = index;
                            var color;
                            if (this.state.cellboard[i][j].value === 0) {
                                color = "#2A363B";
                            } else if (this.state.cellboard[i][j].value === 1) {
                                color = "#E84A5F";
                            } else if (this.state.cellboard[i][j].value === 2) {
                                color = "#FECEA8";
                            }
                            counter++;
                            return (<Cell click={this.click} currentState={cellboard[i][j].value} key={value.id} i={i} j={j} bgcolor={color}/>)
                        }.bind(this))
                    }.bind(this))}
                </div>
                <div className="col-xs-12">
                  <div className="generation">
                      <h3>Generation: {this.state.generation}</h3>
                  </div>
                  <button className="btn" onClick={this.startBoard.bind(this, this.state)}>Start</button>
                  <button className="btn" onClick={this.stopBoard}>Stop</button>
                  <button className="btn" onClick={this.resetBoard.bind(this)}>Clear</button>
                </div>
            </div>
        )
    }
}

export default Board

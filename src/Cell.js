import React, {Component} from 'react';

class Cell extends Component {
    componentWillMount() {
        if (this.state === null) {
            this.setState({isCurrently: this.props.currentState, bgcolor: "gray"})
        }
    }
    render() {
        return (
            <div className="cell-box" style={{
                backgroundColor: this.props.bgcolor
            }} onClick={this.props.click.bind(null, this.props.currentState, this.props.i, this.props.j)}></div>
        )
    }
}

export default Cell

import React from 'react';

export default class Bored extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: "",
            type: "",
            participants: '',
            price: '',
            pic: ''
        }
    }

    handleClick = (e) => {
        const url = "https://www.boredapi.com/api/activity/";
        fetch(url).then(r => r.json()).then(response => {
            this.setState({
                activity: response.activity,
                type: response.type,
                participants: response.participants,
                price: response.price
            })
        })
    }

    addPic = (event) => {
        const url = "https://picsum.photos/200/300/?random";
        fetch(url).then(r => r).then(response => {
            this.setState({
                pic: response.url
            })
        })
    }
    render() {
        return <div className="main main__color">
        <div>
            <div className="container">
                <h2 className="main__title"> Random what to do now!!</h2>
            </div>
            <div className="container">
                <table className="main__table">
                    <thead>
                        <tr>
                            <th>Activity name</th>
                            <th>Count of participants</th>
                            <th>Predicted price</th>
                            <th>Type of activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.activity}</td>
                            <td>{this.state.participants}</td>
                            <td>{this.state.price}</td>
                            <td>{this.state.type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <div className="container">
                <button className="button__random" onClick={this.handleClick}>Random activity</button>
            </div>
            <div className="container">
            <div className="main__video">
            <h2 className="main__video-title">Relax...</h2>
                </div>
            </div>
            <div className="container">
                <h2 className="main__subtitle">Maybe this pictures will you inspire :)</h2>
            </div>
            <div className="picture__container container">
                <img className="picture__container-image" src={this.state.pic} />
            </div>
            <div className="button__container container">
                <button className="button__container-button" onClick={this.addPic}>Random picture</button>
            </div>
        </div>
    }

    componentDidMount() {
        const url = "https://www.boredapi.com/api/activity/";
        fetch(url).then(r => r.json()).then(response => {
            this.setState({
                activity: response.activity,
                type: response.type,
                participants: response.participants,
                price: response.price
            })
        });
        const url1 = "https://picsum.photos/200/300/?random";
        fetch(url1).then(r => r).then(response => {
            this.setState({
                pic: response.url
            })
        })
    }
}

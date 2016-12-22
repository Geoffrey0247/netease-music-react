import React, {Component} from 'react';

import ServiceClient from '../service/ServiceClient';

export default class PlayList extends Component{

    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        userId: ""
    }

    static propType = {
        userId: React.PropTypes.string.isRequired
    }

    state = {
        playList: []
    }

    render(){
        const playList = this.state.playList;
        const self = this;
        return(
            <ul className="nmr-play-list-view">
                {playList.map(function (item, i) {
                    let id = item.id;
                    return <li onClick={self.handleClick.bind(this, id)} key={item.id}>{item.name}</li>
                })}
            </ul>
        );
    }

    componentDidMount(){
        this._loaderUserPlayList();
    }

    async _loaderUserPlayList()
    {
        const playlist = await ServiceClient.getInstance().getUserPlayList();
        this.setState({ playList: playlist });
    }

    handleClick(i)
    {
        console.log(i);
    }

}
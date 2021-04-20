import React, { Component } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import axios from 'axios';

export class LikeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        liked: false,
        likeCount: this.props.likeCount,
    };
    render() {
        return <div style={{ display: 'flex' }} >
            <div onClick={() => this.toggle()}>
                {this.state.liked === false ? (
                    <BsHeart />
                ) : (
                        <BsHeartFill />
                    )}
            </div>
            <div style={{ marginLeft: 10 }} >
                {this.state.likeCount}
            </div>
        </div >;
    }


    toggle = () => {
        let localLiked = this.state.liked;
        localLiked = !localLiked;
        let newCount = this.state.likeCount;

        if (localLiked) {
            axios.get('https://runtimeterrorinstaclone.azurewebsites.net/image/like/' + this.props.id);
            newCount++;
        } else {
            axios.get('https://runtimeterrorinstaclone.azurewebsites.net/image/dislike/' + this.props.id);
            newCount--;
        }

        this.setState({ liked: localLiked, likeCount: newCount });
    };
}
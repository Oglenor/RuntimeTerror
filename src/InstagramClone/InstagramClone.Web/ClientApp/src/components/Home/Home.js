import axios from 'axios';
import React, { Component } from 'react';
import { Container, Col, Row, CardImg, Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import './Home.css';
import { LikeButton } from '../LikeButton/LikeButton.js';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            error: null,
            imageIsLoaded: false
        }
    }
    componentDidMount() {
        fetch("https://runtimeterrorinstaclone.azurewebsites.net/image")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }

    render() {
        const items = this.state.items;
        console.log(items);
        let i = 0;
        return (
            <Container>
                <h1 className="text-center page-header">Home</h1>
                <Row>
                    {items.map(item =>
                        <Col sm="12" md="6" key={i++}>
                            <Card className="card-post" >
                                <CardImg top width="100%" src={"data:image/jpeg;base64," + item.imageData} alt="Card image cap" />
                                <CardBody>
                                    <LikeButton id={item.id} likeCount={item.likeCount} />
                                    <CardTitle tag="h5">{`${item.uploader} képe`}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{item.description}</CardSubtitle>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 min ago</small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}

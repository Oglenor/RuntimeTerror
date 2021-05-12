import React, {Component} from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import {LikeButton} from "../LikeButton/LikeButton";

export class Profile extends Component {
    static displayName = Profile.name;


    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoaded: false,
            items: [],
            error: null,
            imageIsLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://runtimeterrorinstaclone.azurewebsites.net/image/own")
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

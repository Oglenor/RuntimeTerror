import React, {Component} from 'react';
import {Container, Col, Row, CardImg, Card, CardBody, CardTitle, CardText} from 'reactstrap'
import './Home.css'

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
        fetch("https://picsum.photos/v2/list?limit=10")
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
        const items  = this.state.items;
        return (
            <Container>
                <h1 className="text-center page-header">Home</h1>
                <Row>
                    {items.map(item =>
                    <Col sm="12" md="6" key={item.id}>
                        <Card className="card-post">
                            <CardImg top width="100%" src={item.download_url} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle tag="h5">{`${item.author} képe`}</CardTitle>
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

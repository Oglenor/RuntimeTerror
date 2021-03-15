import React, {Component} from 'react';
import {Container, Button, Input} from "reactstrap";
import './Upload.css'

export class Upload extends Component {
  static displayName = Upload.name;


  render() {
    return (
        <Container>
            <div className="upload-wrapper">
                <h1 className="text-center page-header">Képfeltöltés</h1>

                <div className="upload">
                    <Input type="file"/>
                    <h3 className="upload__title">Válassz képet</h3>
                </div>
                <Button color="primary" className="button-upload">Feltöltés</Button>
            </div>
        </Container>
    );
  }
}

import React, { Component } from "react";
import {Input, Container, Button, Toast, ToastBody, Spinner} from "reactstrap";
import "../Layout/Layout.css"
import "./Upload.css";
import axios from "axios";

export class Upload extends  Component {
    static displayName = Upload.Name;

    constructor(props) {
        super(props);
        this.state = {
            success: false,
            show: false,
            showSpinner: false,
            selectedFile: null,
            selectedFilePreview: null,
            description: ""
        }
        this.handlefileSelected = this.handlefileSelected.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    }

    async upload() {
        let imageDtoForm = new FormData();
        imageDtoForm.append('Title', "sometitle");
        imageDtoForm.append('Description', this.state.description);
        imageDtoForm.append('File', this.state.selectedFile);

        this.setState({showSpinner: true});
        try {
            const res = await axios.post('https://runtimeterrorinstaclone.azurewebsites.net/image/upload', imageDtoForm);
            this.setState({show: true, success: true, showSpinner: false});
            console.log(res);
            setTimeout(() => {
                this.props.history.push("/")
            }, 1500);
        } catch (ex) {
            console.log(ex);
            this.setState({show: true, showSpinner:false});
        }
    }

    handlefileSelected(event) {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0],
            selectedFilePreview: URL.createObjectURL(event.target.files[0])
        })
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
        console.log(this.state.description);
    }


    render() {
        const state = this.state;
        return (
            <Container>
                <Toast isOpen={state.show} className={this.state.success ? "toast success" : "toast fail"}>
                    <ToastBody>
                        {state.success ? "Uploaded!" : "Upload failed!"}
                    </ToastBody>
                </Toast>
                <div className="upload-wrapper">
                    <h1 className="text center page-header">New post</h1>
                    <div className="upload">
                        <Input type="file" onChange={this.handlefileSelected}/>
                        <h3 className="upload--title">Choose picture!</h3>
                    </div>
                </div>

                {this.state.selectedFilePreview && (
                    <div className="preview-wrapper">
                        <img className="preview--img" src={this.state.selectedFilePreview} alt=""/>
                        <p>Write some caption:</p>
                        <input
                            type="text" value={this.state.description} onChange={this.handleDescriptionChange}
                        />
                        <Button color="primary" className="button-upload" onClick={() => this.upload()}>Upload</Button>
                    </div>
                )}
                {this.state.showSpinner && (
                    <div className="upload--spinner">
                        <Spinner color="primary" className="spinner"/>
                    </div>
                )}
            </Container>
        );
    }
}
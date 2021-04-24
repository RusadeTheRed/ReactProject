import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem,
    Button, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


// most notes are for me for reference, feel like I fell on my keys here

const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

 function RenderCampsite({campsite}) { // NOTE copy the right one note 2- had to swap locations so I wasnt confused with the exercises
            return (// no instructions mentioned this part about adding the col info... when copied it wasnt there
            <div className="col-md-5 m-1"> 
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
    }


function RenderCommments({comments}) { // Note: after feedback- keeping it comments but could change to campsite, the videos have it set this way so I dont want to get confused later
    if(comments) {
        return(//VVV had the key here as well including comment.id but since it is NOT part of the array method it is undefined
        <div className="col-md-5 m-1">
            <h4>Comments</h4>
            {comments.map(comment =>{//NOTE key after array method ===> return (<div -here- />)
            return(// VVV nice to know I had it right the first time I wrote it, went through several interations/combos to figure out what was wrong
            <div key={comment.id} >
            <p>{comment.text} <br />
                --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </p>
            </div>
                )
            })}
            <CommentForm />
        </div>
        )
    }
    return <div />
}


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        this.toggleModal()
    };

    render() {
        return(
            <React.Fragment>            
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg" /> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" 
                                    className="form-control">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                    className="form-control"
                                    placeholder="Your Name"
                                    validators ={{ // spelling matters had it saying modal="" instead of model*
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                            </div>
                            <div className="form-group">
                                 <Label htmlFor="text">Comment</Label>
                                 <Control.textarea rows="6" model=".text" id="text" name="text" 
                                    className="form-control"
                                 />
                            </div>
                            <div>
                                <Button type="submit" color="primary">Submit</Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }

}

//NOTE renderCampsite is here so no state/props are needed, but the argument does

function CampsiteInfo(props){// main return
        if(props.campsite){
            return (// originally had the key here but was convinced the syntax was the problem not the placement...
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row" >
                        <RenderCampsite campsite={props.campsite} /> <br />
                        <RenderCommments comments={props.comments} />
                    </div>
                </div>
            )
        }
        return <div />
        
    };

export default CampsiteInfo
import React from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



// most notes are for me for reference, feel like I fell on my keys here

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
        </div>
        )
    }
    return <div />
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
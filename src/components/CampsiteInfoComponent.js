import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class CampsiteInfo extends Component{
    constructor(props) {
        super(props);
    }

// most notes are for me for reference, feel like I fell on my keys here
    renderCommments(comments) { 
        if(comments) {
            return(//VVV had the key here as well including comment.id but since it is NOT part of the array method it is undefined
            <div className="col-sm-5 m-1">
                <h4>Comments</h4>
                {this.props.campsite.comments.map(comment =>{//NOTE key after array method ===> return (<div -here- />)
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
        }return <div />
    }


    renderCampsite(campsite) { // NOTE copy the right one
        if (campsite) {
            return (
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
            );
        }
        return <div />
    }

//NOTE renderCampsite is here so no state/props are needed, but the argument does

    render(){// main return
        if(this.props.campsite){
            return (// originally had the key here but was convinced the syntax was the problem not the placement...
                <div className="row" >
                    {this.renderCampsite(this.props.campsite)} <br />
                    {this.renderCommments(this.props.campsite)}
                </div>
            )
        }
        return <div />
        
    };
}
export default CampsiteInfo
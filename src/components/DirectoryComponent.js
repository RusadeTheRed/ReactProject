import React, { Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

class Directory extends Component {
    
    render() {// props since we changed the location of the state to its own file 
        const directory = this.props.campsites.map(campsite => {
            return (// this works because we are in the array method "the more you know"
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsite.id)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (// main return
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;
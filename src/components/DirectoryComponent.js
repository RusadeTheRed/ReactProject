import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    )
}

function Directory(props)  {// props since we changed the location of the state to its own file 
    
    const directory = props.campsites.map(campsite => {
        return (// this works because we are in the array method "the more you know"
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
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

export default Directory;
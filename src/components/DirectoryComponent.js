import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

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
    
    const directory = props.campsites.campsites.map(campsite => {
        return (// this works because we are in the array method "the more you know"
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        )
    })// updateing for thunk and logger
    if (props.campsites.isLoading) {
        return (
            <div className="container" >
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    if (props.campsites.errMess) {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col" >
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }
    return (// main return
        <div className="container">
            <div className="row" >
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;
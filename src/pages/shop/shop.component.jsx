import React from 'react';
import {Switch, Route} from 'react-router-dom';

import CollectionsOverview from '../../compnents/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'



const ShopPage = ({match}) => {
    console.log(`${match.path}/hats`)
    return(
    <div className="shop-page">
    <Switch>
        <Route exact path={match.path} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </Switch>
    </div>
)}



export default (ShopPage);
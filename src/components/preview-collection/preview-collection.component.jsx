import React from 'react';
import './preview-collection.component.scss';
import CollectionItem from '../collection-itme/collection-item.component';



const CollectionPreview = ({title, items}) => (
    <div className= 'collection-preview'> 
        <h1 className= 'title'>{title} </h1>
        <div className= 'preview'> 
        {items
        .filter((g, i) => i < 4)
        .map(({id, ...otheItemProps}) =>(
                <CollectionItem key={id} {...otheItemProps} />
            ))}
        </div>
        </div>
        
);
export default CollectionPreview;
import React from 'react';
import { AddButton, CollectionElement, CollectionWrapper, Wrapper } from '../styles/CollectionsStyles';

function CollectionPage() {
    return (
        <Wrapper>
            <AddButton>+</AddButton>
            <CollectionWrapper>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
            </CollectionWrapper>
        </Wrapper>
    );
}

export default CollectionPage;
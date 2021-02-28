import React from 'react';
import { ContentWrapper, TitleWrapper, SpaceTaker, Title, SortSelector, CollectionNote, Face, Reverse, CollectionFlashcard, CollectionWrapper } from '../styles/CollectionStyles';


function CollectionPage() {
    return (
        <ContentWrapper>
            <TitleWrapper>
                <SpaceTaker></SpaceTaker>
                <Title>Zestaw numer 1</Title>
                <SortSelector>
                    <option value="0">Posortuj</option>
                </SortSelector>
            </TitleWrapper>
            <CollectionWrapper>
                <CollectionNote>assaas</CollectionNote>
                <CollectionNote>assaas</CollectionNote>
                <CollectionFlashcard>
                    <Face></Face>
                    <Reverse></Reverse>
                </CollectionFlashcard>
                <CollectionFlashcard>
                    <Face></Face>
                    <Reverse></Reverse>
                </CollectionFlashcard>
            </CollectionWrapper>
        </ContentWrapper>
    );
}

export default CollectionPage;
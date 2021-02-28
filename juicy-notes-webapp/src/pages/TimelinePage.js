import React from 'react';
import { ContentWrapper, TitleWrapper, Title, Face, Reverse, CollectionFlashcard, Bin, Juice, CollectionWrapper } from '../styles/TimelineStyles';
import LiniaGora from '../images/artoards1-01.png';
import LiniaDwa from '../images/artoards1-02.png';
import LiniaTrzy from '../images/artoards1-03.png';
import LiniaCztery from '../images/artoards1-04.png';
import Kubek from '../images/kubek.png'

function TimelinePage() {
    return (
        <ContentWrapper>
            <TitleWrapper>
                <Title>OŚ CZASU</Title>
            </TitleWrapper>
            <CollectionWrapper>
                <CollectionFlashcard>
                    <Bin src={Kubek}></Bin>
                </CollectionFlashcard>
                <CollectionFlashcard>
                    <Face>Zestaw 1</Face>
                    <Juice src={LiniaGora} />
                </CollectionFlashcard>
                <CollectionFlashcard>
                    <Juice src={LiniaDwa} />
                    <Reverse>Zestaw 2</Reverse>
                </CollectionFlashcard>
                <CollectionFlashcard>
                    <Face>Zestaw 3</Face>
                    <Juice src={LiniaTrzy} />
                </CollectionFlashcard>
                <CollectionFlashcard>
                    <Juice src={LiniaCztery} />
                    <Reverse>Zestaw 4</Reverse>
                </CollectionFlashcard>
            </CollectionWrapper>
        </ContentWrapper>
    );
}

export default TimelinePage;
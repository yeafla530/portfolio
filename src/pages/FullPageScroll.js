import React from 'react';
import FullPage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';
import FourthPage from '../components/FourthPage';


const FullPageScroll = () => {
    return (
        <FullPage>
            <FullpageNavigation />
            <FullPageSections >
                <FullpageSection>
                    <FirstPage/>
                </FullpageSection>
                <FullpageSection className="flex">
                    <SecondPage/>
                </FullpageSection>
                <FullpageSection className="flex">
                    <ThirdPage/>
                </FullpageSection>
                <FullpageSection className="flex">
                    <FourthPage/>
                </FullpageSection>

            </FullPageSections>
        </FullPage>
    );
};

export default FullPageScroll;
import React from 'react'
import styled from 'styled-components';

const BackgroundTemplate = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
`;

function Background({children}) {
    return (
            <BackgroundTemplate src='/images/Background.png'>
                {children}
            </BackgroundTemplate>
    )
}

export default Background

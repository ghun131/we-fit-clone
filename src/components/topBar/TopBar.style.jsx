import styled from 'styled-components';
import { bgColor, borderPink, fontSize, fontFam } from '../style/variable';

export const TopContainer = styled.div`
    background-color: ${bgColor};
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${fontSize};
    font-family: ${fontFam};
`;

export const TopLink = styled.div`
    text-decoration: none;
    color: white;
    border: 2px solid ${borderPink};
    padding: 0.3em 1em;
    margin-left: 135px;
    line-height: 1.7em;
    border-radius: 3px;
`;

export const ImageStyle = styled.div`
    margin-right: 135px;
`;
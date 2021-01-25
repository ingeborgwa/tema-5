import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../Container';


export const SiteNavigationBase = styled(Container)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem;

    ul{
        list-style: none;
        margin: 0 0 0 -1.5rem;
        padding: 0;

        li{
            display: inline-block;

            &:not(:last-child){
                margin-right: 1rem;
            }

            a{
                display: inline-block;
                padding: 0;
                color: black;
                text-decoration: none;
                border-bottom: 2px solid #aaa;

                &hover{
                    border-color: rebeccapurple;
                }
            }
        }
    }
`;


function SiteNavigation (){
    return (
        <SiteNavigationBase as="nav">
            <ul>
                <li><Link to="/om-oss">Om oss</Link></li>
            </ul>
            <ul>
                <li><Link to="/alle-stopp">Alle stopp</Link></li>
            </ul>
            <ul>
                <li><Link to="/">Forside</Link></li>
            </ul>
        </SiteNavigationBase>
    );
}

export default SiteNavigation;
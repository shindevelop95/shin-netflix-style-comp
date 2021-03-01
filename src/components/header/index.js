import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Feature,Background, Container,Logo, ButtonLink} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
      <Background data-testid="header-bg" {...restProps}>
        {children}
      </Background>
    ) : (
      children
    );
  }

Header.Feature = function HeaderFeature({children,...restProps}){
  return <Feature {...restProps}>{children}</Feature>
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}

Header.Logo = function HeaderLogo({to, ...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    );
};
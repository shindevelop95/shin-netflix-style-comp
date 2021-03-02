import React,{useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Feature,PlayButton,Dropdown,Background,Profile, Group, Picture, Link, FeatureCallOut,Container,Logo, ButtonLink,Text,Search,SearchInput,SearchIcon} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
      <Background data-testid="header-bg" {...restProps}>
        {children}
      </Background>
    ) : (
      children
    );
  }

Header.PlayButton = function HeaderPlayButton({children,...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Feature = function HeaderFeature({children,...restProps}){
  return <Feature {...restProps}>{children}</Feature>
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
  const [searchActive, setSearchActive] = useState(false);
  return (<Search {...restProps}>
    <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}>
      <img src="images/icons/search.png" alt="Search"/>
    </SearchIcon>
    <SearchInput value={searchTerm} 
                 onChange={(e) => setSearchTerm(e.target.value)}
                 placeholder="Search films and series"
                 active={searchActive}
    />
  </Search>)
}


Header.Dropdown = function HeaderDropdown({children,...restProps}){
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({children,...restProps}){
  return <Profile {...restProps}>{children}</Profile>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children,...restProps}){
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Picture = function HeaderPicture({src,...restProps}){
  return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}

Header.Text = function HeaderText({children,...restProps}){
  return <Text {...restProps}>{children}</Text>
}

Header.Group = function HeaderGroup({children,...restProps}){
  return <Group {...restProps}>{children}</Group>
}

Header.TextLink = function HeaderTextLink({children,...restProps}){
  return <Link {...restProps}>{children}</Link>
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
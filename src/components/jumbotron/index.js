import React from 'react'
import {Container, Pane, Title, SubTitle,Image ,Inner,Item} from './styles/jumbotron';
function Jumbotron({children,direction = 'row',...restProps}) {
    return (
        <div>
           <Inner direction = {direction}>
             {children}
           </Inner>
        </div>
    )
}

export default Jumbotron

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  };

  Jumbotron.Item = function JumbotronItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
  };

  Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
  };

  Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };

  Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
  };

  Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps}></Image>;
  };



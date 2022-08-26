import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Open Sans';
    background: #6200ee;
    color: #fff;
`

const Wrapper = styled.section`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1200px;
    font-family: 'Open Sans';
    
`

const Title = styled.h2`
    font-size: 1.125rem;
    padding: 2rem 0;
    margin: 0 0 0 1rem;
`

const Button = styled.button`
    background: transparent;
    color: #fff;
    font-weight: 400;
    height: 1.5rem;
    width: 4rem;
    border-radius: 4px;
    margin: 0 1rem 0 0;
`

const Row = styled.div`
   display: flex;
   align-items: center;

   &.list {
    flex-wrap: wrap;
    gap: 2rem;
   }
`
const Col = styled.div`
   display: flex;
   flex-direction: column;
`

const PlayerItem = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 5rem;
    width: auto;
    font-size: 0.875rem;
    background: #fff;
    border-radius: 4px;
`


export default {
    Wrapper,
    Title,
    Row,
    Button,
    Col,
    PlayerItem,
    Header,
}
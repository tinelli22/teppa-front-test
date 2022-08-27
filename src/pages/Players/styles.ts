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
   flex-wrap: wrap;
   gap: 1rem;

  .player-item-actions {
    font-size: 0.625rem;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0 0 0 auto;

    #option {
        cursor: pointer;
    }
  }
`
const Col = styled.div`
   display: flex;
   flex-direction: column;
`

const PlayerItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    min-height: 5rem;
    font-size: 0.875rem;
    background: #fff;
    border-radius: 4px;
    padding: 0 1rem;
    background: #f1f1f1;
    width: 48%;

    #image {
        border-radius: 100%;
        width: 40px;
        height: 40px;
    }

    #name {
        font-weight: 800;
    }
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
import styled from 'styled-components';

const ListQuiz = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    li,
    label {
        flex:1;
        list-style: none;
        background-color: #00000070;        
        margin-bottom: 5px;        
        transition: all linear .2s;
        position: relative;
        overflow: hidden;
        padding: 10px;
        border-radius: ${({ theme }) => theme.borderRadius};
        color:${({ theme }) => theme.colors.contrastText};
    }
    li:hover,
    label:hover {
        background-color:${({ theme }) => theme.colors.terciary};
    }
    li a {
        color:${({ theme }) => theme.colors.contrastText};
        text-decoration: none;
    }
    label:focus-within {
        background-color: ${({ theme }) => theme.colors.secondary} !important;
    }
    label input {
        position: absolute;
        top: 0;
        left: 0;
        left: -30px;        
    }
`;

export default ListQuiz;

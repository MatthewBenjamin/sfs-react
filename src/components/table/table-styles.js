import styled, { css } from 'styled-components'

export const borderMixin = css`
    ${({ noBorder }) => !noBorder && 'border: 1px solid black'};    
`

export const textAlignMixin = css`
    text-align: ${({ rightAlign }) => rightAlign ? 'right' : 'left'};
`

export const StyledTable = styled.table`
    width: 100%;
`

export const StyledTh = styled.th`
    padding: 1rem 0.5rem;

    ${borderMixin}
    ${textAlignMixin}
`

export const StyledTd = styled.td`
    padding: 0.25rem 0.5rem;
    ${borderMixin}
    ${textAlignMixin}
`

export const StyledInput = styled.input`
    margin: 0 1rem;
`

export const StyledResultsDiv = styled.div`
    background: cyan;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding: 0.5rem;
`

export const StyledBottomContainerDiv = styled.div`
    margin: 1rem 0 0.5rem;
`

export const StyledButton = styled.button`
    background: cyan;
    border-radius: 5%;
    border: 1px;
    padding: 0.25rem;
    margin-right: 1rem;
`
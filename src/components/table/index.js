import { StyledTable, StyledTh, StyledInput, StyledTd, StyledBottomContainerDiv, StyledButton, StyledResultsDiv } from './table-styles'
import { creditorName, firstName, lastName, minPaymentPercentage, balance } from '../../constants'

const Table = ({ debtArray }) => {
    // TODO: refactor logic, use big.js
    const total = debtArray.reduce((acc, { checked, balance: currentBalance }) => {
        if (checked) {
            return acc + currentBalance
        }

        return acc
    }, 0)

    return (
        <div>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTh noBorder><StyledInput checked type="checkbox" /></StyledTh>
                        <StyledTh>{creditorName.name}</StyledTh>
                        <StyledTh>{firstName.name}</StyledTh>
                        <StyledTh>{lastName.name}</StyledTh>
                        <StyledTh rightAlign>{minPaymentPercentage.name}</StyledTh>
                        <StyledTh rightAlign>{balance.name}</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {
                        debtArray ? debtArray.map(({
                            [creditorName.key]: rowCreditorName,
                            [firstName.key]: rowFirstName,
                            [lastName.key]: rowLastName,
                            [minPaymentPercentage.key]: rowMinPaymentPercentage,
                            [balance.key]: rowBalance,
                            id,
                            checked
                        }) => (
                        <tr key={id}>
                            <StyledTd noBorder><StyledInput checked={checked} type="checkbox" /></StyledTd>
                            <StyledTd>{rowCreditorName}</StyledTd>
                            <StyledTd>{rowFirstName}</StyledTd>
                            <StyledTd>{rowLastName}</StyledTd>
                            <StyledTd rightAlign>{rowMinPaymentPercentage}</StyledTd>
                            <StyledTd rightAlign>{rowBalance}</StyledTd>
                        </tr>
                        )
                    ) : null }
                </tbody>
            </StyledTable>
            <StyledBottomContainerDiv>
                <StyledButton>Add Debt</StyledButton><StyledButton>Remove Debt</StyledButton><br />
            </StyledBottomContainerDiv>
            <StyledResultsDiv>
                <span>Total:</span> <span>${total}</span>
            </StyledResultsDiv>
        </div>
    )
}

export default Table

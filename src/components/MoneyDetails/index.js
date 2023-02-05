import './index.css'

const MoneyDetails = props => {
  const {transactionList} = props
  let totalIncome = 0
  let totalExpenes = 0
  transactionList.forEach(element => {
    if (element.type === 'Income') {
      totalIncome += parseInt(element.amount)
    } else {
      totalExpenes += parseInt(element.amount)
    }
  })
  const totalBalance = totalIncome - totalExpenes

  return (
    <div className="balance-card">
      <div className="money-detail">
        <img
          className="balance-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="amount-card">
          <p className="amount-para">Your Balance</p>
          <p data-testId="balanceAmount" className="amount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="income money-detail">
        <img
          className="balance-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="amount-card">
          <p className="amount-para">Your Income</p>
          <p data-testId="incomeAmount" className="amount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="expense money-detail">
        <img
          className="balance-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="amount-card">
          <p className="amount-para">Your Expenses</p>
          <p data-testId="expensesAmount" className="amount">
            Rs {totalExpenes}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

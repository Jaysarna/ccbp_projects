import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const deleteHistory = () => {
    deleteTransaction(eachTransaction.id)
  }
  return (
    <li className="history-table-item">
      <p className="p-value">{eachTransaction.title} </p>
      <p className="p-value">Rs {eachTransaction.amount}</p>
      <p className="p-value">{eachTransaction.type}</p>
      <button data-testId="delete" type="button" className="del-btn">
        <img
          className="icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          onClick={deleteHistory}
        />
      </button>
    </li>
  )
}

export default TransactionItem

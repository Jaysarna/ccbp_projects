import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {amount: '', title: '', type: 'Income', transactionList: []}

  createTransaction = e => {
    e.preventDefault()
    const {amount, title, type} = this.state
    if (amount && title && type) {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount,
        type,
      }
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        title: '',
        amount: '',
      }))
    }
  }

  onTitle = e => {
    this.setState({title: e.target.value})
  }

  onAmount = e => {
    this.setState({amount: e.target.value})
  }

  onType = e => {
    if (e.target.value === 'INCOME') {
      this.setState({type: 'Income'})
    } else {
      this.setState({type: 'Expenses'})
    }
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const newList = transactionList.filter(e => e.id !== id)
    this.setState({transactionList: newList})
  }

  render() {
    const {amount, title, transactionList} = this.state
    return (
      <div className="bg-container">
        <div className="profile-card">
          <h1 className="profile-head">Hi,Richard</h1>
          <p className="profile-para">
            Welcome back to your <span className="app-name">Money Manger</span>
          </p>
        </div>
        <div>
          <MoneyDetails transactionList={transactionList} />
        </div>
        <div className="bottom-part">
          <form className="add-transaction" onSubmit={this.createTransaction}>
            <h1 className="bottom-card-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              className="input-box"
              value={title}
              id="title"
              type="text"
              placeholder="Title"
              onChange={this.onTitle}
            />
            <label className="label" htmlFor="amount">
              Amount
            </label>
            <input
              className="input-box"
              id="amount"
              value={amount}
              type="text"
              placeholder="Amount"
              onChange={this.onAmount}
            />
            <label className="label" htmlFor="type">
              Type
            </label>
            <select
              className="input-box"
              id="type"
              onChange={this.onType}
              defaultValue="INCOME"
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="btn">
              Add
            </button>
          </form>
          <div className="add-transaction history">
            <h1 className="bottom-card-heading">History</h1>
            <div className="history-item">
              <div className="history-th">
                <p className="history-table-head">Title</p>
                <p className="history-table-head amount-th">Amount</p>
                <p className="history-table-head">Type</p>
              </div>
              <ul className="TransactionItem-list">
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    eachTransaction={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

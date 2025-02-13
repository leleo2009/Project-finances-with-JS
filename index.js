let transactions = []

function createTransactionContainer(id) {
  const container = document.createElement('div')
  container.classList.add('transaction')
  container.id = `transaction-${id}`
  return container
}

function createTransactionTitle(name) {
  const title = document.createElement('span')
  title.classList.add('transaction-title')
  title.textContent = name
  return title
}

function createTransactionAmount(amount) {
  const span = document.createElement('span')
  span.classList.add('transaction-amount')

  const formatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const formattedAmount = formatter.format(amount)

  if (amount > 0) {
    span.textContent = `${formattedAmount} C`
    span.classList.add('credit')
  } else {
    span.textContent = `${formattedAmount} D`
    span.classList.add('debit')
  }

  return span
}

function createDeleteTransactionButton(id) {
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = 'Excluir'

  deleteBtn.addEventListener('click', async () => {
    try {
      await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })
      deleteBtn.parentElement.remove()

      const indexToRemove = transactions.findIndex((t) => t.id === id)
      if (indexToRemove !== -1) transactions.splice(indexToRemove, 1)

      updateBalance()
    } catch (error) {
      console.error('Erro ao excluir transação:', error)
    }
  })

  return deleteBtn
}

function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id)
  const title = createTransactionTitle(transaction.name)
  const amount = createTransactionAmount(transaction.amount)
  const deleteButton = createDeleteTransactionButton(transaction.id)

  container.append(title, amount, deleteButton)
  document.querySelector('#transactions').append(container)
}

async function saveTransaction(ev) {
  ev.preventDefault()

  const id = document.querySelector('#id').value
  const name = document.querySelector('#name').value
  const amount = parseFloat(document.querySelector('#amount').value)

  try {
    let response
    if (id) {
      response = await fetch(`http://localhost:3000/transactions/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, amount }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const transaction = await response.json()
      const indexToUpdate = transactions.findIndex((t) => t.id === parseInt(id))

      if (indexToUpdate !== -1) transactions.splice(indexToUpdate, 1, transaction)

      document.querySelector(`#transaction-${id}`).remove()
      renderTransaction(transaction)
    } else {
      response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        body: JSON.stringify({ name, amount }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const transaction = await response.json()
      transactions.push(transaction)
      renderTransaction(transaction)
    }

    ev.target.reset()
    updateBalance()
  } catch (error) {
    console.error('Erro ao salvar transação:', error)
  }
}

async function fetchTransactions() {
  try {
    const response = await fetch('http://localhost:3000/transactions')
    if (!response.ok) throw new Error('Erro ao buscar transações')

    return await response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

function updateBalance() {
  const balanceSpan = document.querySelector('#balance')
  const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)

  const formatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  balanceSpan.textContent = formatter.format(balance)
}

async function setup() {
  const results = await fetchTransactions()
  transactions.push(...results)
  transactions.forEach(renderTransaction)
  updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)

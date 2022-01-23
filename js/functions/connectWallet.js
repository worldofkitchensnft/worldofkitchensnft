const d = document, w = window;
w.walletAddress = null

function renderData() {
  if (!w.walletAddress) {
    d.querySelector('.wallet-info').innerHTML = ''
    d.querySelector('.logoutButton').classList.add('hidden')
    d.querySelector('.btn-login').classList.remove('hidden')
    return false
  }

  d.querySelector('.wallet-info').innerHTML = `
    <h2>ETH Address:</h2>
    <p>${w.walletAddress}</p>`
  d.querySelector('.logoutButton').classList.remove('hidden')
  d.querySelector('.btn-login').classList.add('hidden')
}

async function connect() {
  if (w.web3) {
    try {
      const accounts = await web3.eth.getAccounts()
      w.walletAddress = accounts[0]
      w.localStorage.setItem('walletAddress', accounts[0])
      renderData()
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('No ETH extension installed.')
  }
}

function disconnect() {
  w.walletAddress = null
  w.localStorage.removeItem('walletAddress')
  renderData()
}

w.addEventListener('DOMContentLoaded', async () => {
 if (w.ethereum) {
    w.web3 = new Web3(ethereum)
    try {
      await ethereum.enable();
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('No ETH extension installed.')
  }
  
   w.walletAddress = w.localStorage.getItem('walletAddress')
   renderData()
})

d.addEventListener('click', (e) => {
  if (e.target.matches('.btn-login') || e.target.matches('.btn-login *')) {
    connect()
  }

  if (e.target.matches('.logoutButton') || e.target.matches('.logoutButton *')) {
    disconnect()
  }
})

export function addToken(btn) {
  const d = document;

  async function metamask() {
    const tokenAddress = "0xbb6915ccb32e22b465c419a4683b1b91bb6c28fe";
    const tokenSymbol = "BNFY";
    const tokenDecimals = 18;
    const tokenImage =
      "https://i.postimg.cc/tgMbXjhy/photo-2021-05-21-16-39-54.jpg";
    try {
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("HelloWorld Coin has not been added");
      }
    } catch (error) {
      console.error(error);
    }
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if(typeof window.ethereum !== 'undefined') {
        metamask()
      } else {
        d.querySelector('.alert-metamask').classList.add('alert--show')
      }
    }

    if(e.target.matches('.alert-close') || e.target.matches('.alert-close *')) {
      d.querySelector('.alert-metamask').classList.remove('alert--show')
    }
  });
}

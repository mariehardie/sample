function calculateVipClientsTotal(VipClientsAmounts) {
    let total = 0;
    VipClientsAmounts.forEach(amount => {
      total += amount;
    });
    return total;
  }
  
  let VipClientsPurchases = [10000, 20000, 30000];
  console.log(calculateVipClientsTotal(VipClientsPurchases));
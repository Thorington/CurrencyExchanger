
export default class exchangeChecker {  
  static async getExchange(userAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log(response);
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
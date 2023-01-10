import axios from "axios";
// A mock function to mimic making an async request for data
export async function fetchBudgets(amount = 1) {
    console.log('hello');
    const instance = await axios.create({
        baseURL: 'http://localhost:8000/api/',
        timeout: 100000,
        headers: {"Content-Type":"application/json",'Accept': 'application/json'}
      });
    await instance.get('budgets', {
        params: {
          page: 2
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
  }
  
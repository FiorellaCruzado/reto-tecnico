export function login() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log({result});
        const res = {
          nombre: result.name,
          correo: result.email,
          placa: 'C2U-114',
          modelo: 'Wolkswagen 2019 Golf'
        }
        return res;
      })
      .catch(err => {
        return err.message;
      });
  }

  // export function loginp(data) {
  //   const url = 'https://jsonplaceholder.typicode.com/users';
  //   const params = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   };
  
  //   return fetch(url, params)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(result => {
  //       console.log({result});
  //       return result;
  //     })
  //     .catch(err => {
  //       return err.message;
  //     });
  // }
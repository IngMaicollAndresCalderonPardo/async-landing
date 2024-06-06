const url = 'https://api.escuelajs.co/api/v1/categories';

export async function runCode(urlApi) {
    // Tu código aquí 👈
    const options = {
      method: 'GET'
    };
  
    try {
      // validar formato correcto url
      new URL(urlApi);
    } catch (e) {
      throw new Error('Invalid URL');
    }
  
    try { // validar que exista url
      const response = await fetch(urlApi, options);
      const data = await response.json();
      return data;
    } catch (e) {
      throw new Error('Something was wrong');
    }
    
  }
  
  runCode(url);
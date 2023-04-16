export async function fetchData(url) {
    console.log(url)
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Nem jól mükődő hálózati kapcsolat!");
        }
        return response.json();
        
      })
      .catch(error => {
        console.error('Nem jó fetching adat:', error);
      });
      
  }
  

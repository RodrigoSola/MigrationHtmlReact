export async function addUser(user, baseUrl) {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      if (!response.ok) {
        throw new Error("Error en la solicitud")
        
      } const data = await response.json()
      console.log(data)

      } catch (error) {
      console.log(error)
      
    }
  }

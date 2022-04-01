const handleResponse = response => {
    return response.text().then(text => {
      return JSON.parse(text)
    })
  }

export default handleResponse  

 
  
  export const callApiUpdate = async () => {
    const res = await fetch(`http://localhost:3000/api/eventsupdate`)

    if(res.status >= 400) {
      throw(new Error('Error fetching data'))
    } else {
     
      return  await res.json();
     
    }
  }
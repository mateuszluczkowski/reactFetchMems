let data = fetch("https://api.imgflip.com/get_memes")
   .then((response) => {
      return response.json();
   })
   .then((response) => {
      return response.data.memes;
   });

export default data;

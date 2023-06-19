const routes =(Handler)=> [
  {
    method: 'POST',
    path: `/KontakBuruh`,
    handler: Handler.postKontakBuruh,
  },
  
];

module.exports=routes;
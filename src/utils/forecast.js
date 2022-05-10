const request=require('request')


const forecast=(longitude, latitude, callback)=>{
     const url = "http://api.weatherstack.com/current?access_key=8110a18edaef9c0d9636caa92c4912ed&query="+latitude+","+longitude+"&limit=1"
     request({ url, json: true }, (error, {body}) =>{
        if (error){
             callback( 'Unable to connect to weather service!', undefined)
          }else if (body.error){
             callback( 'Unable to find location', undefined)
          }else{
            callback(undefined,"The temperature is :"+body.current.temperature+"it feels like :"+body.current.feelslike);
          }
})
}






module.exports=forecast
// import Geocode from "react-geocode";


const getCoords = async (address) => {
    try { 
        const json = null // await Geocode.fromAddress(address);
        if (json) {
            const location = json.results[0].geometry.location;
            const coords = {
                latitude: location.lat,
                longitude: location.lng,
            };
            const city = json.results[0]?.address_components[1]?.long_name;
            const state = json.results[0]?.address_components[3]?.long_name;
            return { coords, city, state };
        }
    }
    catch(e){
        return null;
    };
}


const guidGenerator = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
};


export {
    getCoords,
    guidGenerator
}
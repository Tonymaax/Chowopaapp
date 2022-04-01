exports.domain = "https://chowopa.com";

//Currency
exports.currency="NGN";
exports.currencySign="₦";

//APP API secert
exports.APP_SECRET=""; //Your app secret - same as in the .env file in your web project 

//COD setup
exports.enableCOD=false;  //Cash on deliver

//Stripe settup
exports.enableStripe=false; 
exports.stripePublishKey="YOUR_STRIPE_KEY";

//OneSignal APP KEY
exports.ONESIGNAL_APP_ID="deb6031b-bb6b-42c8-8bc9-b770b4b983e2";

//Google setup
exports.GOOGLE_API_KEY="AIzaSyCU7ZQReidbTeggjAZdDQV6vR9m4DaZSjI";
exports.queryTypes="address"
exports.queryCountries=['us']; //{['pl', 'fr']}


/*
    searchRadius={500}
    searchLatitude={51.905070}
    searchLongitude={19.458834}
*/
exports.searchLatitude=null;
exports.searchLongitude=null;
exports.searchRadius=null;
// const api_url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a34f570f97mshbad1c37043f10e0p13b105jsn1051851b09b4',
// 		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };
// async function getdata() {
//     const res = await fetch(api_url,options);
//     if(!res.ok){
//         // throw new Error(`Response status: ${res.status}`);
//         console.log(`error: ${res.status}`)
//     }
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
// }
// getdata();
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a34f570f97mshbad1c37043f10e0p13b105jsn1051851b09b4',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function getdata() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }    
}
getdata();
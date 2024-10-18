import { useState, useEffect } from "react";
import axios from "axios";



const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);



    // const http = require('https');

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': 'ebd8e1b847msh8b13b8ced907bccp1ceafdjsn03d822acdf2f',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        // port: null,
        // path: '/search?query=Node.js%20developer%20in%20New-York%2C%20USA&page=1&num_pages=1&date_posted=all',
        params: {...query},
    };

    // const req = http.request(options, function (res) {
    //     const chunks = [];

    //     res.on('data', function (chunk) {
    //         chunks.push(chunk);
    //     });

    //     res.on('end', function () {
    //         const body = Buffer.concat(chunks);
    //         console.log(body.toString());
    //     });
    // });

    // req.end();

    const fetchData = async () => {
        setIsLoading = (true);

        try{
             const response = await axios.request
             (options);
             setData(response.data.data);
             setIsLoading(false);
        }catch(error){

            setError(error)
            alert("There is an error fetching data");

        }finally{

            setIsLoading(false);
 
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch};
}

export default useFetch;
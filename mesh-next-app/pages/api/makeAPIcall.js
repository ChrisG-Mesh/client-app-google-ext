// pages/api/makeAPICall.js

export default async function handler(req, res) {
    // MESH_URL=https://sandbox-integration-api.meshconnect.com
    const apiUrl = 'https://sandbox-integration-api.meshconnect.com/api/v1/linktoken'
    // const apiUrl = 'https://mesh-transactions-dev-api.azurewebsites.net/api/transactions';

    try {
        console.log("in the api call")
        console.log(process.env.MESH_URL)
        const response = await fetch(`${process.env.MESH_URL}/api/v1/linktoken`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-client-id': process.env.MESH_CLIENTID,
                'x-client-secret':process.env.MESH_APIKEY,
              },
              body: JSON.stringify({
                userId: "cg_test_user",
              }),
            });
        
        
        if (!response) {
            throw new Error('Network response was not ok in API call');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

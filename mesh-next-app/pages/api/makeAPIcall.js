// pages/api/makeAPICall.js

export default async function handler(req, res) {
    const apiUrl = 'https://mesh-transactions-dev-api.azurewebsites.net/api/transactions';

    try {
        console.log("in the api call")
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add other headers as needed, e.g., Authorization
            }
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

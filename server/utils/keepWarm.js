import axios from 'axios';

const keepWarm = async () => {
 try {
    const response = await axios.get('https://uxora-ecommerce.onrender.com/keep-warm');
    console.log('Server kept warm:', response.data);
 } catch (error) {
    console.error('Error keeping server warm:', error);
 }
};

// Call the keepWarm function every 5 minutes (300000 milliseconds)
setInterval(keepWarm, 600000);
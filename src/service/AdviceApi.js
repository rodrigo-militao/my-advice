const adviceAPI = () => fetch('https://api.adviceslip.com/advice').then(res => res.json());

export default adviceAPI;

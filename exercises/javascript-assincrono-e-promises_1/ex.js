const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const enviaMensagem = () => {
    setTimeout(() => console.log("Ok, obrigado Curiosity"),5500);
}

const sendMarsTemperature = (callback) => {
    const temperatura = getMarsTemperature();
    setTimeout(() => console.log(`Mars temperature is: ${temperatura} degree Celsius`),5000);
    callback();
};
// crie a função sendMarsTemperature abaixo


sendMarsTemperature(enviaMensagem); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
document.getElementById('contact-form').addEventListener('submit', function(event){ event.preventDefault();



    const formData = new formData(event.target)

    emailjs.send().then(Response =>
    {
    document.getElementById('response-messagem').innerText = 'Menssagem enviada com Sucessexo!'; this.reset()
})
.catch(error => { document.getElementById('response-messagem').innerText = 'erro ao enviar'; console.error('erro ao enviar a mesagem', error)
});

})
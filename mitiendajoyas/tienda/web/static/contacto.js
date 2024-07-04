const btn = document.getElementById('button');

    document.getElementById('form')
      .addEventListener('submit', function(event) {
        event.preventDefault();

    btn.value = 'Enviando...';

      const serviceID = 'default_service';
        const templateID = 'template_0uuo5sv';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'ENVIAR MENSAJE';
          alert('Mensaje enviado correctamente');
            }, (err) => {
              btn.value = 'ENVIAR MENSAJE';
                alert(JSON.stringify(err));
        });
      });
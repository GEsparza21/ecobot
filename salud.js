
  
    document.querySelectorAll('#salud').onclick = function sendIdentification() {
        const files = [...document.querySelector('input[type=file]').files];
        const promises = files.map((file) => {
          return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = (event) => {
                const res = event.target.result;
                console.log(res);
                resolve(res);
              }
              reader.readAsDataURL(file)
          })
        })
        
        Promise.all(promises).then((base64files) => {
          console.log(base64files)
                
          const data = {
            api_key: "AjloWiXuIPHWjFJMfsuBqz5KaSMnRTkuX60EWM6gPsBsu6wCQn",
            images: base64files,
            // modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers
            modifiers: ["crops_fast", "similar_images"],
            language: "en",
            // disease details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Disease-details
            disease_details: ["cause",
                            "common_names",
                            "classification",
                            "description",
                            "treatment",
                            "url"],
          };
          
          fetch('https://api.plant.id/v2/health_assessment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            n1= data.health_assessment.is_healthy;
           n2= data.health_assessment.diseases[0].name;
           n3=data.health_assessment.diseases[0].disease_details.description;
           n4= data.health_assessment.diseases[1].name;
           n5=data.health_assessment.diseases[1].disease_details.description;
    
            document.write("<table border=1>");
    document.write("<tr><td>¿Está sano?</td><td>Nombre de la enfermedad</td><td>Descripción de la enfermedad</td></tr>");
    document.write("<tr><td>"+n1+"</td><td>"+n2+"</td><td>"+n3+"</td></tr>");
    
    document.write("<tr><td>"+n1+"</td><td>"+n4+"</td><td>"+n5+"</td></tr>");
    document.write("</table>");
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        })
      
    };
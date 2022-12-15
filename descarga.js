
function genPDF() {
	
	var doc = new jsPDF();
	
    var specialElementHandlers = {
        '#hidediv' : function(element,render) {return true;}
    };
    
    doc.fromHTML($('#testdiv').get(0), 20,20,{
                 'width':500,
        		'elementHandlers': specialElementHandlers
    });
	
	doc.save('Test.pdf');
	
}
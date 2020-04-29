var waitingElement = document.getElementById('waiting')
var clearResultElement = document.getElementById('clear-result')
var generateButtonElement = document.getElementById('btn-matriz')
var resultElement = document.getElementById('result')

function completeForm() {
    clearResult();

    var lines = Number(document.getElementById('input-lines').value);
    var cols = Number(document.getElementById('input-cols').value);

    for (var i = 0 ; i < lines ; i++ ) {
        var newDivRowId = 'row'+i;
        var newDivRow = '<div class="row" id="'+newDivRowId+'"></div>';
        resultElement.innerHTML += newDivRow;
        for(var j = 0 ; j < cols ; j++ ) {
            var newDivColId = 'col-i'+i+'-j'+j;
            var newDivCol = '<div class="col-sm" id="'+newDivColId+'"></div>'
            document.getElementById(newDivRowId).innerHTML += newDivCol
            if (j==0 || i == 0) {
                document.getElementById(newDivColId).innerHTML += '<h4>Texto</h4>'
            }else {
                var newInputID = 'input-j'+j+'-i'+i;
                document.getElementById(newDivColId).innerHTML += '<input type="text" class="form-control" id="'+newInputID+'" aria-describedby="emailHelp">'
            }
        }
    }
    clearResultElement.style.display = 'block';
    waitingElement.style.display = 'none';
    generateButtonElement.disabled = true;
    generateButtonElement.textContent = 'Matriz gerada'

}

function clearResult() {
    clearResultElement.style.display = 'none';
    waitingElement.style.display = 'block';
    resultElement.innerHTML = '';
    generateButtonElement.disabled = false;
    generateButtonElement.textContent = 'Gerar Matriz'
}
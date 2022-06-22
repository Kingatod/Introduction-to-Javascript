const myScreenOutput = document.getElementById('result');
const myInfo = {
    myFirstName: 'Taiwo',
    myMiddleName: 'Owolabi',
    myLasttName: 'Atunrase',
    myHeight: 6.2,
    myCountry: 'Nigeria',
}

myScreenOutput.innerHTML = '<h2>'+ 'First Name: ' + myInfo.myFirstName + '<br> '  +'Middle Name: ' + myInfo.myMiddleName + ' <br>'  +' Last Name: ' + myInfo.myLasttName + '<br> ' + 'Height: ' + myInfo.myHeight + '<br> '  +'Country: '+ myInfo.myCountry+ '</h2>';


console.log(myInfo);
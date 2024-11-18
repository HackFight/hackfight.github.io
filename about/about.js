const age_txt = document.getElementById('age');

var birthDate = new Date(2007, 3, 8, 0, 0, 0, 0);
var currentDate = new Date();
var age = currentDate.getFullYear() - birthDate.getFullYear();
var month = currentDate.getMonth() - birthDate.getMonth();
var day = currentDate.getDate() - birthDate.getDate();

if ( month < 0 || month == 0 && day < 0 )
{
    age--;
}

age_txt.innerText = age;
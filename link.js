// function myFunction()
// {
//     var name = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     if(name=='HiccupZ' && password=='1234')
//     {
//         document.getElementById('output').innerHTML = name;
//         document.getElementById('output1').innerHTML = password;
//     }
//     else
//     {
//         alert("Wrong Username or Password!");
//     }
// }


// function myFunction(event) {
//     event.preventDefault();  // Prevents form submission and page refresh

//     // Define usernames, passwords, and URLs in separate arrays
//     var usernames = ['HiccupZ', 'Astrid', 'Stoick'];
//     var passwords = ['1234', '5678', '91011'];
//     var urls = [
//         'https://www.w3schools.com/js/js_if_else.asp',
//         'https://www.example.com/link1',
//         'https://www.example.com/link2'
//     ];

//     var name = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     console.log(name,password);
//     // Loop through the arrays to find a match
//     for (var i = 0; i < usernames.length; i++) {
//         if (name === usernames[i] && password === passwords[i]) {
//             window.location.href = urls[i];  // Redirect to corresponding URL
//             return;
//         }
//     }

//     alert("Wrong Username or Password!");
// }



const userId=["HiccupZ","Vizz","Sam","Rocky"]
var password=["1234","5678","100","25"]
var link=["https://github.com/HiccupZ/Snake-Game-C-program-/blob/main/Snake_Game.c","https://play.pokemonshowdown.com/","https://scmsgroup.org/sstm/","https://shellshock.io/"]
function myFunction(event) 
{
    event.preventDefault();
    let userinput = document.getElementById('username').value;
    let userpassword = document.getElementById('password').value;
    let count=true;
    for(let i=0;i<userId.length;i++)
    {
        if (userinput == userId[i] && userpassword == password[i]) 
        {
            window.location.href = link[i];
            count=false;   
        } 
    }
    if(count==true)
    {
        alert("Wrong Username or Password!");
    }
}
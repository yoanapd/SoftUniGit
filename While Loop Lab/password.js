function password (input) {

    let username = input[0];
    let password = input[1];

    let index = 2;
    let typedPass = input[index];
    index++;

    while (typedPass !== password) {

    typedPass = input[index];
       index++;


    } console.log(`Welcome ${username}!`)

// "Welcome {username}!"
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1134"])


const btnConfirm = document.querySelector("#confirm");
const nrInpt = document.querySelector("#number");
const coverInpt = document.querySelector("#cover")
const titleInpt = document.querySelector("#title")
const streamsInpt = document.querySelector("#streams")
const interpreterInpt = document.querySelector("#interpreter")
const tableBody = document.querySelector("tbody");



/*
    The following section is just to test the dynamically
    adding of rows into the table with the click of the "ok" button
    and some temporary input fields to emulate Data retrieval from the
    Spotify API

    Also it gives me the chance to see if the table header will stay fixed 
    to the top, upon insertion of multiple rows.

    PS: The section will be deleted after testing 
*/



btnConfirm.addEventListener("click", ()=>{
    let nr = nrInpt.value;
    let cover = coverInpt.value;
    let title = titleInpt.value;
    let stream = streamsInpt.value;
    let int = interpreterInpt.value;

    const template = `
                <tr>
                    <td>${nr}</td>
                    <td><img src="${cover}"></td>
                    <td>${title}</td>
                    <td>${stream}</td>
                    <td>${int}</td>
                    <td><button class="details">Details</button></td>
                </tr> `;

    tableBody.innerHTML += template;       
});




/* 
    Attempt at retrieving the Bearer token from Spotify!

    In order to do this step you will need to provide the 
    client ID & Client Secret you received from Spotify when 
    creating your App under the developer Account.
    We will later on, encode it and pass it to the header. 
*/

const getAccessToken = async () =>{
    
    //!!!!! Require Client ID and client Secret !!!!!!!
    const clientID = " ";
    const clientSecret = " ";

   
    try{
        const res = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content_Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " +btoa(clientID+ ":" +clientSecret)
                 
            },
            body: "grant_type=client_credentials"
    })
    }catch(err){
      console.log("Cannot retreive Token", err);  
    }

    const data = await res.json();

    //Logging the json data into the console in order to destructure it
    //console.log(data);

    return data.access_token;
    
}


/*
    Using the retreived token to access a Playlist / Chart
    More on: https://developer.spotify.com/console/playlists/
*/

const getPlaylist = (token) => {
    try{
        //implement fetching the playlist
    }catch(err){
        console.log("Failed to get Playlist", err);
    }
}


// Loop Data from the Playlist and display it on the table





var API_key = "RGAPI-1c55dafc-0505-4cbf-be9f-969276d96c7d"
var euw_url  = "https://euw1.api.riotgames.com";
var summoner_name = "";
const regions = ["br1.api.riotgames.com","eun1.api.riotgames.com","euw1.api.riotgames.com","jp1.api.riotgames.com","kr.api.riotgames.com","la1.api.riotgames.com","la2.api.riotgames.com","na1.api.riotgames.com","oc1.api.riotgames.com","tr1.api.riotgames.com","ru.api.riotgames.com","ph2.api.riotgames.com","sg2.api.riotgames.com","th2.api.riotgames.com","tw2.api.riotgames.com","vn2.api.riotgames.com"]

function Search_summoner(){
    summoner_name = document.getElementById("summoner_name").value;
    data();
}

async function data() {
    var summonerNameUrl = "/lol/summoner/v4/summoners/by-name/"+ summoner_name;
    var fullSummonerNameUrl = euw_url+summonerNameUrl+"?api_key="+API_key;
    console.log(fullSummonerNameUrl);
    const dataSummoner_1 = await fetch(fullSummonerNameUrl);
    const dataSummoner_full = await dataSummoner_1.json();
    console.log(dataSummoner_full);
    //Summoner's Name
    summoner_name = dataSummoner_full.name;
    document.getElementById("summoner_name_data").innerHTML = "Summoner's name is: "+summoner_name; 

    //Summoner's Level
    var summoner_Level = dataSummoner_full.summonerLevel;
    console.log(summoner_Level);4   
    document.getElementById("summonerlevel_data").innerHTML = summoner_name + "'s level is:"+summoner_Level;

    //Summoner's Profile Picture
    var profile_pic_number = dataSummoner_full.profileIconId;
    var profile_pic_url = "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/"+profile_pic_number+".png";
    document.getElementById("summonerprofilepic_picture").src = profile_pic_url;
}

function chooseRegion(){

}

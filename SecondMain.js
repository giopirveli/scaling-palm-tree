let more_less_Info = document.querySelector('#more_less_Info');
let animeInformationTexts = document.querySelector('.animeInformationTexts');

 function moreLessInfo(){
    animeInformationTexts.classList.toggle('overflow_visibal');
  animeInformationTexts.classList.toggle('height100');
  if(more_less_Info.textContent === 'Less Detals'){
    more_less_Info.innerHTML='More Detals';
  }
  else if(more_less_Info.textContent === 'More Detals' ){
    more_less_Info.innerHTML='Less Detals';
  }
  
}





 
const eror = document.getElementById('Eror')
const registredUserInfo = document.getElementById('registredUserInfo')
const UserName = document.getElementById('pesteName')
const registationProfil0 = document.getElementById('registationProfil0')
const registredUser  = document.getElementById('registredUser')
var paswordValue = document.getElementById('Password');
var paswordCheckingValue = document.getElementById('PasswordChecking');

function paswordCheacking(){


if(paswordValue.value !== paswordCheckingValue.value){
  eror.style.display = 'flex';
  document.getElementById('Password').value ='';
  document.getElementById('PasswordChecking').value = '';
  UserNameInLogin.value ='';
}
else if(paswordValue.value === paswordCheckingValue.value){
  eror.style.display = 'none';
  registredUserInfo.style.display = 'flex';
  UserName.innerText = UserNameInLogin.value;
  document.getElementById('Password').value ='';
  document.getElementById('PasswordChecking').value = '';
  UserNameInLogin.value ='';
  registationProfil0.style.display = 'none';
  registredUser.style.display = 'block';
}
}






let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }


                                                                    //for ownAnimePages

  const animeCards = [
    {
      name: "Solo leveling",
      link: "",
      image: "animeLists_Imgs/solo-leveling.jpe",
    },
    {
      name: "TSUKIMICHI Moonlit Fantasy",
      link: "",
      image: "animeLists_Imgs/2e7bda4ba44aa751944234541f49b790.jpe",
    },
    {
      name: "That Time I Got Reincarnated as a Slime",
      link: "",
      image: "animeLists_Imgs/ebf137866cc45a05c7401148fe1d6d20.jpe",
    },
    {
      name: "MASHLE: MAGIC AND MUSCLES",
      link: "",
      image: "animeLists_Imgs/f7dfe109de592c6dd9a78dc75ec1965b.jpe",
    },
    {
      name: "Classroom of the Elite",
      link: "",
      image: "animeLists_Imgs/8b35b4a6cffe66004f752aa147351cab.jpe",
    },
    {
      name: "The Unwanted Undead Adventurer",
      link: "",
      image: "animeLists_Imgs/14de5c5e50b2322bfc501478ff7b7143.jpe",
    },
    {
      name: "Mushoku Tensei: Jobless Reincarnation",
      link: "",
      image: "animeLists_Imgs/d458b9695157881b8b257226a2f68bb3.jpe",
    },
    {
      name: "Heaven Official is Blessing",
      link: "",
      image: "animeLists_Imgs/0d8d044a3acf93867b9f711f460c2fb7.jpe",
    },
    {
      name: "To Your Eternityg",
      link: "",
      image: "animeLists_Imgs/016adcae0f11000defa3161db05c2022.jpe",
    },
    {
      name: "SPY x FAMILY",
      link: "",
      image: "animeLists_Imgs/095217fdb4f228410df09b18f151be28.jpe",
    },
    {
      name: "The Apothecary Diaries",
      link: "",
      image: "animeLists_Imgs/af8f1de4c1b2d5345294490a45fcb22d.jpe",
    },
    {
      name: "magic battle",
      link: "",
      image: "animeLists_Imgs/e4e80c83c792d81c138e320874dbdffc.jpe",
    },
    {
      name: "Death Note",
      link: "",
      image: "animeLists_Imgs/697c8b5ff2f49a97348b5507c06e1183.jpe",
    },
    {
      name: "The Case Study of Vanitas",
      link: "",
      image: "animeLists_Imgs/vanitas.jpe",
    },
  
    {
      name: "The Rising of the Shield Hero",
      link: "",
      image: "animeLists_Imgs/hero of shild.jpe",
    },
    {
      name: "Demon Slayer: Kimetsu no Yaiba",
      link: "",
      image: "animeLists_Imgs/demon slayer.jpe",
    },
    {
      name: "Hell is Paradise",
      link: "",
      image: "animeLists_Imgs/hell's paradise.jpe",
    },
    {
      name: "Overlord",
      link: "",
      image: "animeLists_Imgs/overlord.jpe",
    },
    {
      name: "Kaiju No. 8",
      link: "",
      image: "animeLists_Imgs/Kaiju No. 8.jpe",
    },
    {
      name: "WIND BREAKER",
      link: "",
      image: "animeLists_Imgs/WIND BREAKER.jpe",
    },
  
    {
      name: "Moriarty the Patriot",
      link: "",
      image: "animeLists_Imgs/Moriarty the Patriot.jpe",
    },
    {
      name: "Noblesse",
      link: "",
      image: "animeLists_Imgs/Noblesse.jpe",
    },
    {
      name: "Code Geass",
      link: "",
      image: "animeLists_Imgs/Code Geass.jpe",
    },
    {
      name: "BLUE LOCK",
      link: "",
      image: "animeLists_Imgs/BLUE LOCK.jpe",
    },
  
    {
      name: "Black Butler",
      link: "",
      image: "animeLists_Imgs/Black Butler.jpe",
    },
    {
      name: "Chainsaw Man",
      link: "",
      image: "animeLists_Imgs/Chainsaw Man.jpe",
    },
    {
      name: "WONDER EGG PRIORITY",
      link: "",
      image: "animeLists_Imgs/WONDER EGG PRIORITY.jpe",
    },
    {
      name: "Rent-a-Girlfriend",
      link: "",
      image: "animeLists_Imgs/Rent-a-Girlfriend.jpe",
    },
    {
      name: "The Aristocrat’s Otherworldly Adventure: Serving Gods Who Go Too Far",
      link: "",
      image:
        "animeLists_Imgs/The Aristocrat’s Otherworldly Adventure Serving Gods Who Go Too Far.jpe",
    },
    {
      name: "DARLING in the FRANXX",
      link: "",
      image: "animeLists_Imgs/DARLING in the FRANXX.jpe",
    },
  
    {
      name: "Skeleton Knight in Another World",
      link: "",
      image: "animeLists_Imgs/Skeleton Knight in Another World.jpe",
    },
    {
      name: "Thunderbolt Fantasy",
      link: "",
      image: "animeLists_Imgs/Thunderbolt Fantasy.jpe",
    },
  
    {
      name: "Ranking of Kings",
      link: "",
      image: "animeLists_Imgs/Ranking of Kings.jpe",
    },
    {
      name: "Black Clover",
      link: "",
      image: "animeLists_Imgs/Black Clover.jpe",
    },
    {
      name: "Revenger",
      link: "",
      image: "animeLists_Imgs/Revenger.jpe",
    },
    {
      name: "The Irregular at Magic High School",
      link: "",
      image: "animeLists_Imgs/The Irregular at Magic High School.jpe",
    },
    {
      name: "BARTENDER Glass of God",
      link: "",
      image: "animeLists_Imgs/BARTENDER Glass of God.jpe",
    },
    {
      name: "Attack on Titan",
      link: "",
      image: "animeLists_Imgs/Attack on Titan.jpe",
    },
    {
      name: "TONIKAWA: Over The Moon For You",
      link: "",
      image: "animeLists_Imgs/TONIKAWA Over The Moon For You.jpe",
    },
    {
      name: "Battle Game in 5 Seconds",
      link: "",
      image: "animeLists_Imgs/Battle Game in 5 Seconds.jpe",
    },
    {
      name: "So I am a Spider, So What?",
      link: "",
      image: "animeLists_Imgs/So I'm a Spider, So What.jpe",
    },
    {
      name: "Tokyo Revengers",
      link: "",
      image: "animeLists_Imgs/tokyo revengers.jpe",
    },
    {
      name: "How To Fight",
      link: "",
      image: "animeLists_Imgs/fight in online.jpe",
    },
    {
      name: "Friends Game",
      link: "",
      image: "animeLists_Imgs/friends game.jpe",
    },
    {
      name: "My Hero Academia",
      link: "",
      image: "animeLists_Imgs/my hero academy.jpe",
    },
    {
      name: "Undead Murder Farce",
      link: "",
      image: "animeLists_Imgs/Undead Murder Farce.jpe",
    },
  
    {
      name: "THE PROMISED NEVERLAND",
      link: "",
      image: "animeLists_Imgs/THE PROMISED NEVERLAND.jpe",
    },
    {
      name: "Dead Mount Death Play",
      link: "",
      image: "animeLists_Imgs/Dead Mount Death Play.jpe",
    },
    {
      name: "ReLIFE",
      link: "",
      image: "animeLists_Imgs/relife.jpe",
    },
    {
      name: "King's Game",
      link: "",
      image: "animeLists_Imgs/game of king.jpe",
    },
  
    {
      name: "Horimiya",
      link: "",
      image: "animeLists_Imgs/horomia.jpe",
    },
    {
      name: "The Banished Former Hero Lives as He Pleases",
      link: "",
      image: "animeLists_Imgs/58a7fa542e23148f8baf660378e5b5dc.jpe",
    },
    {
      name: "Naruto Shippuden",
      link: "",
      image: "animeLists_Imgs/naruto.jpe",
    },
    {
      name: "One-Punch Man",
      link: "",
      image: "animeLists_Imgs/one punch man.jpe",
    },
    {
      name: "Dr. STONE",
      link: "",
      image: "animeLists_Imgs/d.stone.jpe",
    },
    {
      name: "Bottom-Tier Character Tomozaki",
      link: "",
      image: "animeLists_Imgs/Bottom-Tier Character Tomozaki.jpe",
    },
  
  
    // Add more anime cards as needed
  ];



          const randomNumbers = [];
while (randomNumbers.length < 14) {
    const randomNumber = Math.floor(Math.random() * 55) + 1;
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
    }
}




corandomNumbersniqSlidesBoxPaste = document.getElementById('uniqSlidesBoxPaste')

function rundomAnime(Animenumber) {

  for (let i = 0; i < randomNumbers.length; i++) {
 let   animeCard = animeCards[Animenumber[i]];

    uniqSlidesBoxPaste.innerHTML += `

<div class="swiper-slide">
          <div class="cardOfSerchSizeProtatipe">
            <div class="cardOfsearch">
              <a href=""><img class="animeCard" style="width: 100%;"
                  src="../${ animeCard.image}" alt=""></a>
              <p class="roboto-regular">${ animeCard.name}</p>

            </div>
          </div>
        </div>

            
        `;
  }
  
}
rundomAnime(randomNumbers)



var swiperssss = document.querySelectorAll('.sliderUnique')

var slidesPerView_Number = 6;
let spaceBetween = 30;
function handleResize_first_anime_Slot() {

  var screenWidtth = document.documentElement.clientWidth;

   if(screenWidtth < 470){
    slidesPerView_Number = 2;
   }
   else if(screenWidtth < 500 && screenWidtth > 470 ){
    slidesPerView_Number = 4;
    
  }
  else if(screenWidtth > 500 && screenWidtth < 770){
    slidesPerView_Number = 4;
    
  }
  else if (screenWidtth > 770 && screenWidtth < 991) {
    slidesPerView_Number = 5;
    
  } 
 else if (screenWidtth > 991) {
    slidesPerView_Number = 6;
    
  }

var swiper = new Swiper('.sliderUnique', {
    // Optional parameters
    slidesPerView:slidesPerView_Number,
    spaceBetween: spaceBetween,
    centeredSlides: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    });



}


window.addEventListener("resize", handleResize_first_anime_Slot);

handleResize_first_anime_Slot();











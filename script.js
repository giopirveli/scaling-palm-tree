let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }


const animeSpoilerTexts_original = [
  "They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that",
  'Makoto Misumi was just an average teenager who suddenly was summoned to another world as a "hero." But the goddess of this world called him ugly and took his hero status away from him, then sent him to the ends of the world. He meets dragons, spiders, orcs, dwarves, and many other non-',
  "Corporate worker Mikami Satoru is stabbed by a random killer, and is reborn to an alternate world. But he turns out to be reborn a slime Thrown into this new world with the name Rimuru, he begins his quest to create a world that’s welcoming to all races.",
  "This is a world of magic. This is a world in which magic is casually used by everyone.  In a deep, dark forest in this world of magic, there is a boy who is singlemindedly working out. His name is Mash Burnedead, and he has a secret. He can’t use magic.",
  "Kiyotaka Ayanokoji has just enrolled at Tokyo Koudo Ikusei Senior High School, where its said that 100% of students go on to college or find employment. But he ends up in Class 1-D, which is full of all the schools problem children.",
  "Rentt Faina has hunted monsters for the last 10 years. Sadly, he’s not great at his job, stuck hunting slimes and goblins for a few coins each day. His luck turns when he finds an undiscovered path. At the path’s end, he meets his demise in the maw of a legendary dragon. But, he wakes up as an undead bag of bones! He sets out to achieve Existential Evolution and rejoin the land of the living.",
  "When a 34-year-old underachiever gets run over by a truck, his story doesn it end there. Reincarnated in a new world as an infant, Rudy will seize every opportunity to live the life hei s always wanted. Armed with new friends, some freshly acquired magical abilities, and the courage to do the things he is always dreamed of, he is embarking on an epic adventure—with all of his past experience intact!",
  "Xie Lian, crown prince of Xian Le Kingdom, ascends to Heaven despite successive demotions. However, he accidentally breaks the Gold Palace of heavenly officials. With no human worshiping him, Xie Lian must descend to the secular world to exorcise ghosts.",
  'In the beginning, an "orb" is cast unto Earth. "It" can do two things: change into the form of the thing that stimulates "it"; and come back to life after death. "It" morphs from orb to rock, then to wolf, and finally to boy, but roams about like a newborn who knows nothing. As a boy, "it" becomes Fushi.',
  "World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as a loving husband and father, he’ll infiltrate an elite school to get close to a high-profile politician. He has the perfect cover, except his wife’s a deadly assassin and neither knows each other’s identity. But someone does, his adopted daughter who’s a telepath!",
  "Maomao lived a peaceful life with her apothecary father. Until one day, she’s sold as a lowly servant to the emperor’s palace. But she wasn’t meant for a compliant life among royalty. So when imperial heirs fall ill, she decides to step in and find a cure! This catches the eye of Jinshi, a handsome palace official who promotes her. Now, she’s making a name for herself solving medical mysteries!",
  "Follow young Yuji Itadori in this dark supernatural action series as he begins training in the dangerous arts of jujutsu sorcery and explores the violent world of curses! Yuji Itadori eats a cursed finger to save a classmate, and now Ryomen Sukuna, a powerfully evil sorcerer known as the King of Curses, lives in Itadori’s soul. Curses are supernatural terrors created from negative human emotions. This cursed energy can be used as a power source by jujutsu sorcerers and cursed spirits alike.",
  "Light Yagami is an ace student with great prospects and he is bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god.",
  'In nineteenth-century France, humans and vampires coexist The young vampire Noé is traveling to Paris in search of The Book of Vanitas, which is said to be capable of unleashing a curse upon all vampires.On an airship, he finds himself embroiled in a strange incident. It is Vanitas, a human calling himself a vampire expert, who appears before Noé in the ensuing chaos. In Vanitas’s hands is the very book that Noé has been searching for: The Book of Vanita…',
'Iwatani Naofumi, a run-of-the-mill otaku, finds a book in the library that summons him to another world. He is tasked with joining the sword, spear, and bow as one of the Four Cardinal Heroes and fighting the Waves of Catastrophe as the Shield Hero.',
'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself.',
'Gabimaru reigns as the strongest and most ruthless assassin in his village. But now finds himself on death row—with only one way out: retrieve the Elixir of Life from a sinister island. Longing for freedom, he accepts the challenge. But with fellow convicts vying for the same prize and demonic beasts lurking, how will Gabimaru survive this harrowing quest?',
'When a popular MMORPG is scheduled to be shut down permanently, veteran player Momonga refuses to log out. As NPCs begin to develop personalities and minds of their own he decides to put his skills to use as the game’s new overlord.',
'In a world plagued by creatures known as Kaiju, Kafka Hibino aspired to enlist in The Defense Force. He makes a promise to enlist with his childhood friend, Mina Ashiro. Soon, life takes them in separate ways. While employed cleaning up after Kaiju battles, Kafka meets Reno Ichikawa. Reno is determination to join The Defense Force reawakens Kafka is promise to join Mina and protect humanity.',
'Welcome to Furin High School, an institution infamous for its population of brawny brutes who solve every conflict with a show of strength. Some of the students even formed a group, Bofurin, which protects the town. Haruka Sakura, a first-year student who moved in from out of town, is only interested in one thing: fighting his way to the top.',
'William James Moriarty strategizes to fix the British Empire and its systemic inequity while keeping Sherlock Holmes off his trail!',
'Raizel awakens from his 820-year slumber.He holds the special title of Noblesse, a pure-blooded Noble and protector of all other Nobles. In an attempt to protect Raizel, his servant Frankenstein enrolls him at Ye Ran High School, where Raizel learns the simple and quotidian routines of the human world through his classmates. However, the Union, a secret society plotting to take over the world, dispatches modified humans and gradually encroaches on Raizel’s life, causing him to wield his mighty power to protect those around him...',
'The year is 2017 of the Imperial calendar and parts of the world are under the control of the Holy Britannian Empire. Lelouch Lamperouge, an exiled Britannian prince, encounters a strange girl known as C.C., who gifts him with a great and terrible power. The Geass. With this powerful ability, Lelouch can get anyone to do as he wills. But the power of Geass: is it a blessing…or a curse?',
'Japan’s desire for World Cup glory leads the Japanese Football Association to launch a new rigorous training program to find the national team’s next striker. Three hundred high school players are pitted against each other for the position, but only one will come out on top. Who among them will be the striker to usher in a new era of Japanese soccer?',
'Ciel Phantomhive is the most powerful boy in all of England, but he bears the scars of unspeakable suffering. Forced to watch as his beloved parents were brutally murdered, Ciel was subsequently abducted and violently tortured. Desperate to end his suffering, the boy traded his own soul for a chance at vengeance, casting his lot with the one person on whom he could depend: Sebastian, a demon Butler summoned from the very pits of hell. Together, they’ll prowl the darkest alleys of London on a mission to snuff out those who would do evil.',
'Denji is a young boy who works as a Devil Hunter with the “Chainsaw Devil” Pochita.One day, as he was living his miserable life trying to pay off the debt he inherited from his parents, he got betrayed and killed. As he was losing his consciousness, he made a deal with Pochita, and got resurrected as the “Chainsaw Man”: the owner of the Devil’s heart.',

'This is the story of Ai, an introverted girl whose fate is forever changed when she acquires a mysterious “Wonder Egg” from a deserted arcade. That night, her dreams blend into reality, and as other girls obtain their own Wonder Eggs, Ai discovers new friends—and the magic within herself.',
'Kinoshita Kazuya is a 20-year-old failure of a college student. He managed to kiss his girlfriend once, but was dumped after a month. "Ugh... Damn it. I never want to go through that again."',
'Shiina Kazuya’s convenience store visit was anything but when he was killed protecting a girl. He suddenly awakens in the kind of world he has only dreamed about, one with magic and swords! Now as Cain von Silford, a son of an aristocratic family, the gods grant him divine blessings and',
'The distant future: Humanity established the mobile fort city, Plantation, upon the ruined wasteland. Within the city were pilot quarters, Mistilteinn, otherwise known as the “Birdcage.” That is where the children live... Their only mission in life was the fight. Their enemies are the',
'When Arc wakes up, he discovers that he has been transported to another world in the body of the character he was playing in an MMO. Looking like a suit of armor on the outside and a skeleton on the inside, he is the Skeleton Knight. If his identity is discovered, he could be mistaken',
'What happens when you then take Gen Urobuchi from Nitroplus and partner him with Pili International Media, the company responsible for the glove puppetry media with the highest production values? The result is a miraculous collaboration.',
'How prosperous your nation is, how many powerful warriors it boasts, and how heroic and strong its king is. These are the criteria that factor into the system known as the Ranking of Kings The main character, Bojji, was born the first prince of the kingdom ruled by King Bossu, who is',
'In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s',
'As master assassin Usui Yuen looks into a series of assassinations made on the grand samurai clan, the Satsuma, he encounters Kurima Raizo, member and survivor of one of the attacks. Together, they discover the true nature of these murders is bigger than over stolen resources. As they get',
'Based on the light novel by Tsutomu Sato, The irregular at magic high school is set in a world where magic exists but instead of using chants and spells, magic users cast spells with their Casting Assistant Device (CAD). The CAD is infused with the user’s Psions (a substance-less',
'At Eden Hall, each glass has a story. A quiet bar lies tucked away in the streets of Tokyo, and it seems only the most desperate souls burdened by their own troubles manage to find its doors. But after a glass of God poured by the brilliant bartender Ryu, they leave renewed. Ryu has a gift—he',
'Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared',
'Nasa Yuzaki falls in love at first sight after an encounter with the mysterious Tsukasa. When Nasa earnestly confesses his feelings, she replies, I will date you, but only if we are married." Nasa and Tsukasa is cute and precious newlywed life of love is about to begin!',
'A new kind of battle of abilities for a new generation is about to begin! It all started on a regular morning like any other. Akira Shiroyanagi is a high school kid who loves nothing more than',
'I, the protagonist, was just an ordinary high school girl, but suddenly I was reincarnated as a spider monster in a fantasy world. Not only that, but I awakened in a dungeon filled with vicious',

'Takemichi Hanagaki is a freelancer that is reached the absolute pits of despair in his life. He finds out that the only girlfriend he ever had, in middle school, Hinata Tachibana, had been killed by the ruthless Tokyo Manji Gang. The day after hearing about her death, he is standing on the station platform and ends up being pushed over onto the tracks by a herd of people. He closes his eyes thinking he is about to die, but when he opens his eyes back up, he somehow had gone back in time 12 years. Now that he is back living the best days of his life, Takemichi decides to get revenge on his life.',
'Like and subscribe to NewTube’s latest streaming sensation, Hobin Yu! Tired of bullies, the scrawny high schooler is fighting back and streaming it. With tips from a mysterious online channel, he’s cashing in and knocking out bullies. He’s got the internet going crazy, but can Hobin keep it up or will he get crushed by his next match?',
'After raising enough to join his friends on a school trip, Yuichi’s money, along with the rest of the class’s, is stolen! And to make matters worse, he and his close friends have been abducted to play a debt repayment game or else they’ll be millions of yen in debt! The Tomodachi Game will test their bonds with betrayal, secrets, and which means the most to them—money or friendship?',
'In this world, creatures like vampires and werewolves still walk about, but Aya Rindo can’t say the same for herself. This beautiful disembodied head, carried by her maid Shizuku Hasei, is a detective in search of her stolen body. One evening, they meet half-human Oni Slayer Tsugaru Shunichi, who offers a lending hand. Now, the trio is traveling through Europe, solving mysteries along the way.',
'Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.',
'The one adored as the mother is not the real parent. The people living here together are not actual siblings. The Gracefield House is where orphaned children live. An irreplaceable home where 38 siblings and Mom live happy lives, even with no blood relations. However, their everyday life suddenly came to an abrupt end one day',
'As a legendary hero nears victory against a necromancer known as The Corpse God, things take an unexpected turn with the dark sorcerer’s final gambit—reincarnation magic. This last-ditch effort catches the brave fighter off guard, and now he’s a boy named Polka Shinoyama in a whole new world! The showdown between good and evil just got epic.',
'Arata Kaizaki (27) quit the job he landed after graduation in only three months. His life did not go well after that. Now his parents are threatening to stop sending money, and want him to come back to the country. He has no friend or girlfriend to share his troubles with...as he hits rock bottom a strange man named Ryo Yoake appears. Yoake invites Kaizaki to join a societal rehabilitation program for NEETs called ReLife. This program uses a mysterious drug to make him look younger, and sends him back to high school for a year',
'Kanazawa Nobuaki has transferred to a high school far from where he used to live. Due to an incident at his old school, Nobuaki is afraid of getting close to his new classmates and keeps himself at a distance, but he starts opening up because of a sports day inter-class relay. Then, a single text message from someone calling themselves the "King" is sent to everyone in class. Nobuaki’s classmates think it is a simple prank, and dont take it seriously--but Nobuaki knows that a death game is about to begin, and struggles to oppose it',
'On the surface, the thought of Kyouko Hori and Izumi Miyamura getting along would be the last thing in peoples minds. After all, Hori has a perfect combination of beauty and brains, while Miyamura appears meek and distant to his fellow classmates. However, a fateful meeting between the two lays both of their hidden selves bare. Even though she is popular at school, Hori has little time to socialize with her friends due to housework. On the other hand, Miyamura lives under the noses of his peers, his body bearing secret tattoos and piercings that make him look like a gentle delinquent.',
'Allen is banished from the Duchy of Westfeldt on account of his low level and lack of a god-given Gift, and all seems lost. But with his memories of a past life as a hero intact, Allen sees this twist of fate as a blessing—he can finally live his life as he pleases! That momentary peace is cut short when Allen saves his ex-fiancée, beginning a new saga for the banished former hero.',
'Naruto Uzumaki wants to be the best ninja in the land. He is done well so far, but with the looming danger posed by the mysterious Akatsuki organization, Naruto knows he must train harder than ever and leaves his village for intense exercises that will push him to his limits.',
' Saitama started out being a hero just for fun. After three years of “special” training, he became so powerful that he can defeat opponents with a single punch. Now, alongside Genos, his faithful cyborg disciple, Saitama is ready to begin his official duties as a professional hero working with the Hero Association. However, the frequency of monster appearances is surging and it increasingly appears as if the Great Seer Madame Shibabawa’s prediction about the Earth’s doom is coming true. In the midst of this crisis, the “hero hunter” Garou makes his own appearance.',
'Several thousand years after a mysterious phenomenon that turns all of humanity to stone, the extraordinarily intelligent, science-driven boy, Senku Ishigami, awakens. Facing a world of stone and the total collapse of civilization, Senku makes up his mind to use science to rebuild the world. Starting with his super strong childhood friend Taiju Oki, who awakened at the same time, they will begin to rebuild civilization from nothing... Depicting two million years of scientific history from the Stone Age to present day, the unprecedented crafting adventure story is about to begin!',
'Fumiya Tomozaki is Japan is best player in the online game Attack Families, commonly known as "Tackfam." Despite holding such a revered title, a lack of social skills and amiability causes him to fall short in his everyday high school life. Failing to have any friends, he blames the convoluted mechanics and unfair rules of life, forcing him to give up and proclaim himself a bottom-tier character in this "game." After a fateful meeting with another top-tier Tackfam player, Fumiya is shocked to discover the player is true identity—Aoi Hinami, a popular, smart, and sociable classmate who is the complete opposite of himself. Aoi, surprised at how inept Fumiya is at everything besides Tackfam, decides to assist him in succeeding in what she calls the greatest game of them all. Through the gruesome ordeals of social interactions and relationships, Fumiya begins to advance tiers in the glorious game of life.',























];

let animeSpoilerTexts_protatipe = [];

animeSpoilerTexts_original.forEach((element) => {
  element = element.slice(0, 150);
  animeSpoilerTexts_protatipe.push(element);
});
 
function createParagraphs(texts) {
  for (let i = 0; i < texts.length; i++) {
    let p = document.getElementById(`animeSpoilerText${i + 1}`);
    p.innerText = `${texts[i]}...`;
  }
}
createParagraphs(animeSpoilerTexts_protatipe);




const progressCircle = document.querySelector(".autoplay-progress svg");
      const progressContent = document.querySelector(".autoplay-progress span");
      var swiper = new Swiper(".mySwiper", {
         spaceBetween: 30,
         centeredSlides: true,
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
      });

//                                       //short push in content end
                                      var swiperss = document.querySelectorAll('.card__animee');
                                      var swipersss = document.querySelectorAll('.slider1');
var slidesPerView_Number = 5;
let spaceBetween = 30;
function handleResize_first_anime_Slot() {

  var screenWidtth = document.documentElement.clientWidth;

   if(screenWidtth < 470){
    slidesPerView_Number = 2;
   }
   else if(screenWidtth < 500 && screenWidtth > 470 ){
    slidesPerView_Number = 2;
    
  }
  else if(screenWidtth > 500 && screenWidtth < 770){
    slidesPerView_Number = 3;
    
  }
  else if (screenWidtth > 770 && screenWidtth < 991) {
    slidesPerView_Number = 4;
    
  } 
 else if (screenWidtth > 991) {
    slidesPerView_Number = 5;
    
  }
console.log( screenWidtth)
  swiperss.forEach(function (card__animee_arrey) {
    var swiper = new Swiper(card__animee_arrey, {
      slidesPerView:slidesPerView_Number,
    spaceBetween: spaceBetween,
    centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    });

  });
  



  swipersss.forEach(function (card__animee_arrey) {
    var swiper = new Swiper(card__animee_arrey, {
      slidesPerView:slidesPerView_Number,
    spaceBetween: spaceBetween,
    centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    });

  });
  
}

var slider1 = new Swiper ('.slider1', {
  loop: true,
  slidesPerView:slidesPerView_Number,
  spaceBetween: spaceBetween,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  slidesPerView:slidesPerView_Number,
  spaceBetween: spaceBetween,
  centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  
});





window.addEventListener("resize", handleResize_first_anime_Slot);

handleResize_first_anime_Slot();



// function test (animenames){

//   for(let i = 0 ; i< animenames.length; i++ ){
//     let count = 0;
//     for(let x = 0; x< animenames.length; x++ ){
//       if(animenames[i] == animenames[x]){
//         count++;
        
//       }   
//     }
//     console.log(`${animenames[i]} = ${count}`)
      
//   }
  
// }
// test(ANIMENAMES)



 //                            big cards spoilers
let kidzu_spoiler = animeSpoilerTexts_original[18];
let demonSlayerSpoiler = animeSpoilerTexts_original[15];
let How_to_Fight = animeSpoilerTexts_original[43]
//
let animeSpoilerTexts_demonSlayerSpoiler = '';
let animeSpoilerTexts_Bigcards_kidzu = '';
let animeSpoilerTexts_How_to_Fight = '';
//
 let kaidzuParagrapText = document.getElementById('kaidzuSpoiler');
 let demonSlayerSpoilerText = document.getElementById('dempnSlayerSpoiler');
 let How_to_FightSpoilerText = document.getElementById('HowToFight')
 //

 //
 function textSizeControl_bigCards(text,id,spoiler){
  var screenWidtthh = window.innerWidth;
   if(screenWidtthh < 470){
    text = spoiler.slice(0,160);
   }
   else if(screenWidtthh < 771 && screenWidtthh> 470){
    text = spoiler.slice(0,120);
  }
  else if(screenWidtthh > 771 && screenWidtthh < 900){
    text = spoiler.slice(0,150);
    
  }
  else if (screenWidtthh > 900 && screenWidtthh < 1144) {
    text = spoiler.slice(0,185);

  } 
 else if (screenWidtthh > 991) {
  text = spoiler.slice(0,250)
    
  }
  id.innerText = `${text} ...`;
 };
 
 
textSizeControl_bigCards(animeSpoilerTexts_Bigcards_kidzu,kaidzuParagrapText,kidzu_spoiler);
textSizeControl_bigCards(animeSpoilerTexts_demonSlayerSpoiler,demonSlayerSpoilerText,demonSlayerSpoiler);
textSizeControl_bigCards(animeSpoilerTexts_How_to_Fight,How_to_FightSpoilerText,How_to_Fight);
//  window.addEventListener("resize", textSizeControl_bigCards);

// Add event listener for window resize
window.addEventListener("resize", function() {
  textSizeControl_bigCards(animeSpoilerTexts_Bigcards_kidzu, kaidzuParagrapText, kidzu_spoiler);
  textSizeControl_bigCards(animeSpoilerTexts_demonSlayerSpoiler, demonSlayerSpoilerText, demonSlayerSpoiler);
  textSizeControl_bigCards(animeSpoilerTexts_How_to_Fight,How_to_FightSpoilerText,How_to_Fight);
})





 








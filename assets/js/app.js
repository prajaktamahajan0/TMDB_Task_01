let cl = console.log;

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'
const IMG_PATH  = 'https://image.tmdb.org/t/p/w1280';

let imagescontainer = document.getElementById("imagescontainer");


let moviearr = [
      {
            adult:false,
            backdrop_path:"/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg",
            genre_ids:[35,80],
            id:638974,
            original_language:"en",
            original_title:"Murder Mystery 2",
            overview:"After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
            popularity:332.375,
            poster_path:"/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg",
            release_date:"2023-03-28",
            title:"Murder Mystery 2",
            video:false,
            vote_average:6.6,
            vote_count:1109
      } ,    
     {
           adult:false,
           backdrop_path:"/vL5zdAKAnbcHjoewXoP4xy6ihf7.jpg",
           genre_ids:[16,10751,878,35],
           id:1121116,
           original_language:"en",
           original_title:"Maggie Simpson in \"Rogue Not Quite One\"",
           overview:"On their way to daycare, Homer loses track of Maggie who hops in Grogu’s hovering pram for a hyperspace-hopping adventure across the galaxy. Facing a squadron of Imperial TIE fighters, Maggie brings the battle to Springfield in this epic short celebrating all things Star Wars.",
           popularity:343.12,
           poster_path:"/gmTOhwzcSbEGG3xKRfQwwS2BTXD.jpg",
           release_date:"2023-05-04",
           title:"Maggie Simpson in \"Rogue Not Quite One\"",
           video:false,
           vote_average:5.8,
           vote_count:22,
      },
      {
            adult:false,
            backdrop_path:"/aPvIX46VtxZDwu5bB2UcJ7xdpxs.jpg",
            genre_ids:[28,12,35],
            id:977223,
            original_language:"en",
            original_title:"Polite Society",
            overview:"Martial artist-in-training Ria Khan believes she must save her older sister Lena from her impending marriage. After enlisting the help of her friends, Ria attempts to pull off the most ambitious of all wedding heists in the name of independence and sisterhood.",
            popularity:334.706,
            poster_path:"/lv1WqAo2ulQy9aSOG7ikR44p8RR.jpg",
            release_date:"2023-04-27",
            title:"Polite Society",
            video:false,
            vote_average:6.8,
            vote_count:41
      },
      {
            adult:false,
            backdrop_path:"/4w2uPtIo0lFSnQnWg0zVAqPJCLP.jpg",
            genre_ids:[16,10751,14],
            id:10144,
            original_language:"en",
            original_title:"The Little Mermaid",
            overview:"This colorful adventure tells the story of an impetuous mermaid princess named Ariel who falls in love with the very human Prince Eric and puts everything on the line for the chance to be with him. Memorable songs and characters -- including the villainous sea witch Ursula.",
            popularity:363.851,
            poster_path:"/plcZXvI310FkbwIptvd6rqk63LP.jpg",
            release_date:"1989-11-17",
            title:"The Little Mermaid",
            video:false,
            vote_average:7.4,
            vote_count:7061
      },
      {
            adult:false,
            backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
            genre_ids:[878,12,53],
            id:700391,
            original_language:"en",
            original_title:"65",
            overview:"65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
            popularity:260.344,
            poster_path:"/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
            release_date:"2023-03-02",
            title:"65",
            video:false,
            vote_average:6.2,
            vote_count:1157
      },
      {
            adult:false,
            backdrop_path:"/aonRCFac0K1HukgnzWE5N7DzpgR.jpg",
            genre_ids:[28,12,10752],
            id:948713,
            original_language:"en",
            original_title:"The Last Kingdom: Seven Kings Must Die",
            overview:"In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
            popularity:374.429,
            poster_path:"/qcNDxDzd5OW9wE3c8nWxCBQoBrM.jpg",
            release_date:"2023-04-14",
            title:"The Last Kingdom: Seven Kings Must Die",
            video:false,
            vote_average:7.3,
            vote_count:408
      },
      {
            adult:false,
            backdrop_path:"/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg",
            genre_ids:[27,53],
            id:890771,
            original_language:"en",
            original_title:"The Black Demon",
            overview:"Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
            popularity:520.617,
            poster_path:"/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
            release_date:"2023-04-26",
            title:"The Black Demon",
            video:false,
            vote_average:6.4,
            vote_count:61
      },
      {
            adult:false,
            backdrop_path:"/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
            genre_ids:[28,12,35],
            id:384018,
            original_language:"en",
            original_title:"Fast & Furious Presents: Hobbs & Shaw",
            overview:"Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have traded smack talk and body blows. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, they join forces to defeat him.",
            popularity:254.915,
            poster_path:"/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
            release_date:"2019-08-01",
            title:"Fast & Furious Presents: Hobbs & Shaw",
            video:false,
            vote_average:6.9,
            vote_count:6405  
      },
      {
            adult:false,
            backdrop_path:"/c3hl9E8E7b9opXDFVF5tSyk0ykr.jpg",
            genre_ids:[16,35,10751,12,14],
            id:816904,
            original_language:"es",
            original_title:"Momias",
            overview:"Through a series of unfortunate events, three mummies end up in present-day London and embark on a wacky and hilarious journey in search of an old ring belonging to the Royal Family, stolen by ambitious archaeologist Lord Carnaby.",
            popularity:384.499,
            poster_path:"/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg",
            release_date:"2023-01-05",
            title:"Mummies",
            video:false,
            vote_average:7.2,
            vote_count:308 
      },
      {
            adult:false,
            backdrop_path:"/zPEDfWece7gg1I0904KFFVUq5mg.jpg",
            genre_ids:[53,28,80],
            id:1102776,
            original_language:"fr",
            original_title:"AKA",
            overview:"A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
            popularity:373.75,
            poster_path:"/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
            release_date:"2023-04-28",
            title:"AKA",
            video:false,
            vote_average:7.1,
            vote_count:350   
      },
      {
            adult:false,
            backdrop_path:"/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
            genre_ids:[28,12,80],
            id:385128,
            original_language:"en",
            original_title:"F9",
            overview:"Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
            popularity:229.176,
            poster_path:"/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
            release_date:"2021-05-19",
            title:"F9",
            video:false,
            vote_average:7.2,
            vote_count:638
      },
      {
            adult:false,
            backdrop_path:"/e7FzphKs5gzoghDotAEp2FeP46u.jpg",
            genre_ids:[27,35,28],
            id:649609,
            original_language:"en",
            original_title:"Renfield",
            overview:"Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
            popularity:380.648,
            poster_path:"/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
            release_date:"2023-04-07",
            title:"Renfield",
            video:false,
            vote_average:6.9,
            vote_count:557     
       },
      {
            adult:false,
            backdrop_path:"/9SICXMeX0v0gr5czpoRO5I0U7M9.jpg",
            genre_ids:[10751,16,14],         
            id:1118203,
            original_language:"en",
            original_title:"The Swan Princess: A Fairytale Is Born",
            overview:"Before becoming queen, Uberta lived a humble life with her husband Maximillian when she is suddenly thrust into royalty. Through triumph and tragedy, she learns the lessons needed to become a beloved Queen, all while raising the next generation of rulers. When it's time for Uberta to pass the royal scepter to Odette and Derek, rival Queen Wixom has plans of her own to ruin the kingdom's greatest coronation.",
            popularity:834.436,
            poster_path:"/2axXVpi3dKfESWzgncbakLB7o7f.jpg",
            release_date:"2023-05-23",
            title:"The Swan Princess: A Fairytale Is Born",
            video:false,
            vote_average:7.1,
            vote_count:1
      },
      {
            adult:false,
            backdrop_path:"/A077VsMIBBXNvlI5mohGnSiIrfI.jpg",
            genre_ids:[878,27,35],
            id:536554,          
            original_language:"en",
            original_title:"M3GAN",
            overview:"A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
            popularity:277.266,
            poster_path:"/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
            release_date:"2022-12-28",
            title:"M3GAN",
            video:false,
            vote_average:7.3,
            vote_count:293
      },
      {
            adult:false,
            backdrop_path:"/bblKpucB0XbyQBmfXsaRN985Rgh.jpg",
            genre_ids:[18],
            id:458220,
            original_laguage:"en",
            original_title:"Palmer",
            overview:"After 12 years in prison, former high school football star Eddie Palmer returns home to put his life back together—and forms an unlikely bond with Sam, an outcast boy from a troubled home. But Eddie's past threatens to ruin his new life and family.",
            popularity:191.833,
            poster_path:"/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg",
            release_date:"2021-01-29",
            title:"Palmer",
            video:false,
            vote_average:8,
            vote_count:168
      },
      {
            adult:false,
            backdrop_path:"/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
            genre_ids:[878,12,28,35],
            id:283995,
            original_language:"en",
            original_title:"Guardians of the Galaxy Vol. 2",
            overview:"The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
            popularity:237.486,
            poster_path:"/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
            release_date:"2017-04-19",
            title:"Guardians of the Galaxy Vol. 2",
            video:false,
            vote_average:7.6,
            vote_count:19833
      },
      {
            adul:false,
            backdrop_path:"/uO28ZohBXYQ35rAZCG8hacsTcV0.jpg",
            genre_ids:[28,12,53],
            id:646389,
            original_language:"en",
            original_title:"Plane",
            overview:"After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
            popularity:252.802,
            poster_path:"/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
            release_date:"2023-01-12",
            title:"Plane",
            video:false,
            vote_average:6.9,
            vote_count:1279
      },
      {
            adult:false,
            backdrop_path:"/8K9UjencUfDVS4nKFmSk4URSoeU.jpg",
            genre_ids:[53,35,80],
            id:804150,
            original_language:"en",
            original_title:"Cocaine Bear",
            overview:"Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
            popularity:324.475,
            poster_path:"/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
            release_date:"2023-02-22",
            title:"Cocaine Bear",
            video:false,
            vote_average:6.3,
            vote_count:1122
      },
      {
            adult:false,
            backdrop_path:"/kmGG8d0WuTZv0JxZFx1NXnFYxQh.jpg",
            genre_ids:[18,35,10751],
            id:1121316,
            original_language:"es",
            original_title:"El último vagón",
            overview:"Georgina is a teacher determined to make a difference in the lives of the children she educates in the classroom of a wagon school in rural Mexico.",
            popularity:314.776,
            poster_path:"/8Tf7bBXpLQjgFI0a5KJ1eHrxHTw.jpg",
            release_date:"2023-05-26",
            title:"Where the Tracks End",
            video:false,
            vote_average:8.8,
            vote_count:25
      },
      {
            adult:false,
            backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",
            genre_ids:[12,14,10751],
            id:736790,
            original_language:"en",
            original_title:"Chupa",
            overview:"While visiting family in Mexico, a lonely boy befriends a mythical creature hiding on his grandfather's ranch and embarks on the adventure of a lifetime.",
            popularity:343.971,
            poster_path:"/ra3xm8KFAkwK0CdbPRkfYADJYTB.jpg",
            release_date:"2023-04-07",
            title:"Chupa",
            video:false,
            vote_average:6.5,
            vote_count:248
      }
]
    


let result = '';

moviearr.forEach(obj => {
      result += `
      <div class="col-md-4 mt-4">
                        <div class="card imdbcard">
                              <figure>
                              <img src="https://image.tmdb.org/t/p/w1280${obj.poster_path}" alt=""
                              class="cardimg">
                                    <figcaption>
                                          <div class="row">
                                                <div class="col-9">
                                                      <p class="details">
                                                           ${obj.title}
                                                      </p>
                                                </div>
                                                <div class="col-3">
                                                      <p class="rating ${colors(obj.vote_average)}"  id="badge">
                                                            ${obj.vote_average}
                                                      </p>

                                                </div>
                                          </div>
                                    </figcaption>
                                    <div class="overview">
                                          <h4>Overview</h4>
                                          <p>
                                                ${obj.overview}
                                          </p>
                                    </div>
                              </figure>

                        </div>
                  </div>
      
      `
      
      
     

})

function colors (rating){
      if(rating >= 7){
            return "ratinggreen"
      }else if(rating >=5){
            return "ratingyellow"
      }else if (rating >= 4){
            return "ratingorange"
      }else {
            return "ratingred"
      }
}

imagescontainer.innerHTML = result;







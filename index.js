let current_chapter = ""
let lives = 5


function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function get_start(name){
    document.getElementById('body').style.backgroundColor = "#ffffff";
    document.getElementById('choice').style.display =  "none";

    document.getElementById('left').style.display = "block"
    document.getElementById('right').style.display = "block"
    document.getElementById('pipidastr').style.display = "block"


    document.getElementById('hearts').style.display = "flex"
    document.getElementById('hearts').style.flexDirection = "column"
    document.getElementById('hearts').style.gap = 1+"%" 
    

    document.getElementById(name).style.display = "block"

    let position = 42
    document.getElementById('left').addEventListener("click", function(){
        document.getElementById(name).style.position = "absolute"
        position -= 5
        if (position <= 5){
            position += 5
        }
        document.getElementById(name).style.left = position+"%"
    });
     document.getElementById('right').addEventListener("click", function() {
        document.getElementById(name).style.position = "absolute"
        position += 5
        if (position >= 80){
            position -= 5
        }
        document.getElementById(name).style.left = position+"%"
     });

     document.addEventListener("keydown", function(event){
        if (event.key === "ArrowRight"){
            document.getElementById(name).style.position = "absolute"
            position += 5
            if (position >= 80){
                position -= 5
            }
            document.getElementById(name).style.left = position+"%"
        } else {
            document.getElementById(name).style.position = "absolute"
            position -= 5
            if (position <= 5){
                position += 5
            }
            document.getElementById(name).style.left = position+"%"

        }
     });
     game_start(window.innerWidth, name)
}

async function game_start(width, name){
    document.getElementById('drop').style.display = "block"
    while (lives != 0){
        let top = 70
        let random = Math.floor(Math.random() * width)
        let left = Math.floor((random*100)/width)
        if (random <= (width*10)/100|| random >= (width*75)/100){
            continue
        }
        document.getElementById('drop').style.left = random + "px"
        while (top <= window.innerHeight - 50){
            top += 10
            document.getElementById('drop').style.top = top + "px"
            let people = document.getElementById(current_chapter).getBoundingClientRect()
            let drop_position = document.getElementById('drop').getBoundingClientRect()
            const touch = !(
                drop_position.right < people.left ||
                drop_position.left > people.right ||
                drop_position.bottom < people.top ||
                drop_position.top > people.bottom
            )
            if (touch){
                document.getElementById(`${lives}-heart`).innerText = "💔"
                lives-=1
                if (lives == 0){
                    console.log("GAME OVER")
                    document.getElementById('left').style.display = "none"
                    document.getElementById('right').style.display = "none"
                    document.getElementById('pipidastr').style.display = "none"
                    document.getElementById('drop').style.display = "none"
                    document.getElementById(name).style.display = "none"

                    document.getElementById('gameOver').style.display = "block"
                }
                break
            }
            await delay(20)
        }
        await delay(100)
        
        }
    }



document.getElementById('Ann1').addEventListener('click', function () {
    current_chapter = "Ann"
    get_start("Ann")
});
document.getElementById('Polina1').addEventListener('click', function () {
    current_chapter = "Polina"
    get_start("Polina")
});
document.getElementById('Alona1').addEventListener('click', function () {
    current_chapter = "Alona"
    get_start("Alona")
});



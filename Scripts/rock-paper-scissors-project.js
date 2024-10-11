
            let score =JSON.parse(localStorage.getItem('score'))|| {
                wins : 0,
                loses : 0,
                ties : 0
            };
            
        
            updateScoreElement();
            
        

           

              function function1(){
                    const random = Math.random();
                    let computerMove= '';
                    if(random >= 0&&random < 1/3){
                        computerMove='Rock';
                    }
                    else if(random >= 1/3&&random < 2/3){
                        computerMove='Paper';
                    }
                    else if(random >= 2/3&&random < 1){
                        computerMove='Scissors';
                    }
                    return computerMove;
              }

              let isAutoPlaying = false;
              let intervalId;

              function autoPlay(){
                if(!isAutoPlaying){
                intervalId=setInterval(function(){
                    const playerMove = function1();
                    playGame(playerMove);

                },1000)
                isAutoPlaying=true;
            }
            else{
                clearInterval(intervalId);
                isAutoPlaying=false;
            }
              }

              function changeName(){
                const Name = document.querySelector('.auto-play-button');
                if(Name.innerHTML==='AutoPlay'){
                    Name.innerHTML = 'StopPlay';
                }
                else{
                    Name.innerHTML = 'AutoPlay';
                }
              }
              

              function playGame(playerMove){
                const computerMove = function1();

                let result = '';
                if(playerMove==='Rock'){
                    if(computerMove === 'Rock'){
                        result = 'Tie.';
                    }
                    else if(computerMove === 'Paper'){
                        result = 'You lose.';
                    }
                    else if(computerMove === 'Scissors'){
                        result = 'You win.';
                    }
                }
                if(playerMove==='Paper'){
                    if(computerMove === 'Rock'){
                        result = 'You win.';
                    }
                    else if(computerMove === 'Paper'){
                        result = 'Tie.';
                    }
                    else if(computerMove === 'Scissors'){
                        result = 'You lose.';
                    }
                }
                if(playerMove==='Scissors'){
                     if(computerMove === 'Rock'){
                        result = 'You lose.';
                    }
                    else if(computerMove === 'Paper'){
                        result = 'You win.';
                    }
                    else if(computerMove === 'Scissors'){
                        result = 'Tie.';
                    }

                }
                if(result === 'You win.'){
                    score.wins += 1;
                }
                else if (result === 'You lose.'){
                    score.loses += 1;
                }
                else if (result === 'Tie.'){
                    score.ties += 1;
                }

                localStorage.setItem('score',JSON.stringify(score));

                

                updateScoreElement();

                document.querySelector('.js-result')
                 .innerHTML = result;

                 document.querySelector('.js-moves')
                  .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon">Computer`;
 

                

                /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
 wins:${score.wins}  loses:${score.loses}  ties:${score.ties}.`);
 */
              }

               function updateScoreElement(){
                document.querySelector('.js-score')
                 .innerHTML=`Wins:${score.wins}, Loses:${score.loses}, Ties:${score.ties}`;
                
            }

           


        
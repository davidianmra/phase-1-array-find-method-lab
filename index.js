// code your solution here


function superbowlWin(records) {
    const winningYear = records.find( record => record.result === "W")
    if(!!winningYear){
       
        return winningYear.year

      }
    else{
    return undefined
    }     
}



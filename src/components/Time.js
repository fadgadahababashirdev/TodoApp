import React from 'react'

const Time = () => {
    const myTime =() =>{
        const currentTime = new Date()
        const myHour = currentTime.getHours()
        const myMinutes = currentTime.getMinutes()

        if(myHour === 0 || myHour > 0 && myHour <=12){
            return `${myHour} : ${myMinutes} AM`
        }else{
            return `${myHour} : ${myMinutes} PM`   
        }

    }
   
  return (
    <div>
             {myTime()}
    </div>
  )
}

export default Time
const video = document.getElementById('video')

/* addEventListener('visibilitychange', (e)=>{
    if(document.visibilityState === 'visible'){
        console.log('PLAY')
        video.play()
    }else if(document.visibilityState === 'hidden'){
        console.log('PAUSE')
        video.pause()
    }
}) */

addEventListener('visibilitychange', (e)=>
    document.visibilityState === 'visible' ? video.play() : video.pause()
)
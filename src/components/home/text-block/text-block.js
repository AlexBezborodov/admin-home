import React from 'react'

function TextBlock() {
    const h2 = `Detailed information How to use it` 
    const p1 = `Viverra suspendisse praesent consectetur velit, praesent massa viverra etiam dolor. Id urna semper egestas quis vitae sed. Hac adipiscing lacus quam diam dolor tellus placerat turpis fames. Sodales porta morbi dignissim lobortis purus arcu posuere aenean a. Nullam diam, sit ut eu, quis ac neque sed. Natoque ac eget nulla nunc, commodo, amet, pellentesque et enim. Egestas at commodo placerat orci nunc.` 
    const p2 = `Mauris dictum lacus integer et odio. Euismod curabitur tellus enim in ut consequat suspendisse fermentum. Id ipsum praesent massa nunc. Tellus odio malesuada molestie ultrices id eu porttitor. Et pharetra donec consequat et, venenatis, vulputate mattis blandit. Mauris ut massa vestibulum lacinia mauris feugiat sed mattis non. Diam amet mattis netus proin et. Congue amet amet quis eget ut.`
    return (
        <div className='detailed-block'>
        <h2 className='text-start'>{h2}</h2>   
        <div>
        <p className='text-start'>{p1}</p>
        <p className='text-start'>{p2}</p> 
        </div>        
    </div>
    )
}
export default TextBlock;
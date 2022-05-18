import'./animatedLettres.scss'

import React from 'react'

function AnimatedLettres({lettreClass,strArray,idx}) {
  return (
    <span>
        {strArray.map((char,i)=>(
            <span key={char+i} className={`${lettreClass} _${i+idx} `} >
                {char}
            </span>
        ))}
    </span>
  )
}

export default AnimatedLettres
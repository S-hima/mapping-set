import React from 'react'

const Card = ({name,emoji,id,meaning}) => {
  return (
    <div className="term">
      {id}
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emoji}
          </span>
          <span>{name}</span>
        </dt>
        <dd>
         {meaning}
        </dd>
      </div>

  )
}

export default Card
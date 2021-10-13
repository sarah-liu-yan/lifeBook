import React from 'react'

/**
* @author
* @function Post
**/

export const Post = (props) => {
  return(
    <div>
        {props.userName}
        {props.post}
        {/* post comments */}
    </div>
   )

 }
import React from 'react'

/**
* @author
* @function Post
**/

export const Post = (props) => {
  return(
    <div>
        {props.userName}
        {props.content}
        {/* post comments */}
    </div>
   )

 }
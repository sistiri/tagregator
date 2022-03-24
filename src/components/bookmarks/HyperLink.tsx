import React from 'react'
import { Link } from 'react-router-dom';
import classes from './HyperLink.module.css'

type HyperLinkProps = {
    url: string
}

const HyperLink: React.FC<HyperLinkProps>= (props) => {

  return (
    
        <Link className={classes.hyperlink} to={props.url}>{props.url}</Link>
  )
}

export default HyperLink
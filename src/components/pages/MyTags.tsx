import React, { Fragment } from 'react'
import Tags from '../bookmarks/Tags'


type MyTagsProps = {
    tags: string[]
}

const MyTags = (props: MyTagsProps) => {

  return (
    <Fragment>
       {/* <Tags tags={props.tags} onShowAddTags={showEditTagsModal}></Tags> */}

    </Fragment>
  )
}

export default MyTags
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

type TagDetailsProps = {};

const TagDetails: React.FC<TagDetailsProps> = (props) => {
  const params = useParams();

  console.log(params.tag);

  return (
    <Fragment>
      <div>TagDetails</div>
      <h1>{params.tag}</h1>
    </Fragment>
  );
};

export default TagDetails;

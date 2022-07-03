import React from "react";
import PropTypes from "prop-types";

const PostCard = ({ body, title }) => {
  return (
    <div className="mx-5 my-10 ">
      <div className="max-w-md my-4 py-4 px-5 bg-slate-100 rounded-lg  drop-shadow-md">
        <h4 className="text-2xl pb-5 text-slate-700 font-bold">{title}</h4>
        <p className="font-semibold text-slate-600">{body}</p>
      </div>
    </div>
  );
};

// prop types
PostCard.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
};

export default PostCard;

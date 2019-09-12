import React from 'react';

function PostHeader({ name, avatar, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={avatar} />
      <div className="details">
        <div className="name">{name}</div>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ author, content }) {
  return (
    <div className="post-comments">
      <div className="comment">
        <img className="avatar" src={author.avatar} />
        <p>
          <span>{author.name} </span>
          {content}
        </p>
      </div>
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader {...author} date={date} />
      <p className="post-content">{content}</p>
      {comments.map((comment, index) => (
        <PostComments key={index} {...comment} />
      ))}
    </div>
  );
}

export default PostItem
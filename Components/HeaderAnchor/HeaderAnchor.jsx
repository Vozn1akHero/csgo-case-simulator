import React from "react";
import Link from "next/link";

export const HeaderAnchor = (props) => {
  return (
    <>
      <>
        <Link style={{ textDecoration: "none" }} href={props.to}>
          <span className='header-btn'>
            {props.title}
          </span>
        </Link>
        {props.bordered && <hr className='header-btn__border' />}
      </>
      <style jsx>
        {`
          .header-btn {
            height: 100%;
            width: 200px;
            background: none;
            outline: none;
            font-weight: 500;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          .header-btn__border {
            height: 100%;
            width: 3px;
            background: rgba(0, 0, 0, 0.4);
            margin: 0;
            float: right;
            border: none;
          }
          .header-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
    </>
  );
};

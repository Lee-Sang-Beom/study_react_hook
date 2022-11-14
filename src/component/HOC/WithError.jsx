import React from "react";

export default function withError(WrappedComponent) {
  return function withError({ errorMsg, ...props }) {
    return (
      <>
        <div>
          <WrappedComponent {...props} />
          {errorMsg && <span className="error_msg">{errorMsg}</span>}
        </div>
      </>
    );
  };
}

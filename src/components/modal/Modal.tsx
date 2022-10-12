import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Modal = (props: {
  deleteHandler: React.MouseEventHandler<HTMLLabelElement> | undefined;
}) => {
  return (
    <>
      <label
        htmlFor="my-modal"
        className="modal-button btn btn-error m-2 flex w-full max-w-sm flex-row items-center space-x-1"
      >
        <h3>Delete this ticket</h3>
        <AiOutlineDelete />
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">
            Are you sure you want to delete this ticket?
          </h3>
          <div className="flex flex-row space-x-2">
            <div className="modal-action">
              <label
                onClick={props.deleteHandler}
                htmlFor="my-modal"
                className="btn btn-error"
              >
                Delete
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn btn-success">
                Keep ticket
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

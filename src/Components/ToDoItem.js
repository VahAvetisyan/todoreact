import React from "react";

export class ToDoItem extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      editingName: this.props.toDo.name,
      isEditing: false,
    };
  }

  onEditingNameChange = (e) => {
    this.setState({
      editingName: e.target.value,
    });
  };

  onSaveClick = () => {
    this.setState({
      isEditing: false,
    });
    this.props.onSave(this.props.toDo.id, this.state.editingName);
  };

  onCancelClick = () => {
    const { toDo } = this.props;
    this.setState({
      editingName: toDo.name,
      isEditing: false,
    });
  };

  render() {
    const { toDo, onDelete, changeIsChecking } = this.props;
    return (
      <div className="toDo-item">
        {this.state.isEditing ? (
          <>
            <input
              id="edit-input"
              onChange={this.onEditingNameChange}
              value={this.state.editingName}
            />
            <button className="btn btn-save" onClick={this.onSaveClick}>
              Save
            </button>
            <button className="btn btn-cancel" onClick={this.onCancelClick}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <div
              id="toDo-name"
              className={toDo.checked ? "checked-toDo" : "unchecked-toDo"}
            >
              <input
                type="checkbox"
                checked={toDo.checked}
                onChange={(e) => {
                  console.log(e.target.checked);
                  changeIsChecking(toDo.id, e.target.checked);
                }}
              />
              <span>{toDo.name}</span>
            </div>
            <div className="btns-del-edit">
              <button
                className="btn btn-del"
                onClick={() => {
                  onDelete(toDo.id);
                }}
              >
                Del
              </button>
              <button
                className="btn btn-edit"
                onClick={() => {
                  this.setState({
                    isEditing: true,
                  });
                }}
              >
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

import React, { Component } from "react";
import TodoListUI from "./TodoListUI";
import { connect } from "react-redux";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from "../store/actionCreators";

class TodoList extends Component {
  render() {
    const {
      inputValue,
      list,
      changeInputValue,
      handleClick,
      handleDeleteItem
    } = this.props;

    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        handleInputChange={changeInputValue}
        handleClick={handleClick}
        handleDeleteItem={handleDeleteItem}
      />
    );
  }
}

const mapStateToProps = state => ({
  inputValue: state.inputValue,
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  changeInputValue(event) {
    const action = getInputChangeAction(event.target.value);
    dispatch(action);
  },

  handleClick() {
    const action = getAddItemAction();
    dispatch(action);
  },

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

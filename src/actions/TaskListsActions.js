import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const TaskListsActions = {
  loadTaskLists() {
    api.listTaskLists()
    .then(data => {
      AppDispatcher.dispatch({
        type: Constants.TASK_LISTS_LOAD_SUCCESS,
        items: data.items
      });
    })
    .catch(err => {
      AppDispatcher.dispatch({
        type: Constants.TASK_LISTS_LOAD_FAIL,
        error: err
      });
    });
  }
};

export default TaskListsActions;

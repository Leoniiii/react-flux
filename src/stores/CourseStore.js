import { EventEmmiter } from "events";

const CHANGE_EVENT = "change";

class CourseStore extends EventEmmiter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emitChange(CHANGE_EVENT);
  }
}

const store = new CourseStore();
export default store;
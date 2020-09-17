import {  takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { getInitListAction } from './actionCreator'
import axios from 'axios'

function* initList() {
    const res = yield axios.get('./list.json')
    const data = res.data.list
    const action = getInitListAction(data)
    yield put(action)
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, initList);
}
  
export default mySaga;
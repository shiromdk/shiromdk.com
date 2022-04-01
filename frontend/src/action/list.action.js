import { listService } from '../services'

const getLists = () => {
    console.log("CALLING")
    return listService.getLists()
}

export const listActions = {
    getLists
}
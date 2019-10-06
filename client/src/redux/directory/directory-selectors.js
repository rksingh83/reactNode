import {createSelector} from 'reselect' //#endregion

const selectDirectory = state=>state.directory;
export const selectSection  = createSelector([selectDirectory],directory=>directory.sections);






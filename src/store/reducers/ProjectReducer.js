const ProjectReducer = (state, action) => {

  switch(action.type){

    case 'SET_PROJECTS_STATE':
      return action.payload

    default :
      return { projects : null }

  }


}

export default ProjectReducer
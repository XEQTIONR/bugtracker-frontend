const ProjectReducer = (state, action) => {

  switch(action.type){

    case 'SET_PROJECTS_STATE':
      return {projects : action.payload.projects, current_project : state.current_project}

    case 'SET_CURRENT_PROJECT_STATE' :
      return {projects : state.projects, current_project : action.payload.current_project}
    
      default :
      return { projects : null, current_project : null }

  }


}

export default ProjectReducer
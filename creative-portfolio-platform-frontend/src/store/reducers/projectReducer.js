const initialState = {
  projects: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id ? action.payload : project
        ),
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
      };
    default:
      return state;
  }
};

export default projectReducer;
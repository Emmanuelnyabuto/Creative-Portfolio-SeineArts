const initialState = {
  artists: [],
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTIST':
      return { ...state, artists: [...state.artists, action.payload] };
    case 'UPDATE_ARTIST':
      return {
        ...state,
        artists: state.artists.map(artist =>
          artist.id === action.payload.id ? action.payload : artist
        ),
      };
    case 'DELETE_ARTIST':
      return {
        ...state,
        artists: state.artists.filter(artist => artist.id !== action.payload),
      };
    default:
      return state;
  }
};

export default artistReducer;
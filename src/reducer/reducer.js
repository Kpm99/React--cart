export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE": {
        console.log("action.id",action.id);
        
      let newState = state.map((i) => {
        if (i.id == action.id) {
            console.log("equalll");
            
          return { ...i, amount: i.amount + 1 };
        }
        return i;
      });
      console.log("updated Data", state);
      return newState;
    }

    case "DECREASE": {
     let newState = state.map((i) => {
        if (i.id == action.id && i.amount > 1) {
          return { ...i, amount: i.amount - 1 };
        }
        return i
      });
      console.log("updated Data", state);

      return newState;
    }

    case "REMOVE": {
      const data = state.filter((i) => i.id !== action.id);

      console.log("updated Data", data);

      return data;
    }

    case "CLEAR": {
      return [];
    }

    case "SET":{
        return action.payload
    }
  }
};

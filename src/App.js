import React, {Component} from 'react';
import FuncComp from "./FuncComp";
import{Provider} from 'react-redux'
import{createStore} from 'redux'


const initialState={
    counter:0,
    user:[]
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'COUNT_INC':
            return {...state,
                counter: state.counter+1
            }
        case 'COUNT_DEC':
            return {...state,
                counter: state.counter-1
        }
        case 'COUNT_RESET':
            return {...state,
                counter: 0
            }
        case 'USER_SET':
            return {...state,
                user:action.payload
            }
        case 'SET_COUNT':
            return {...state,
                counter: action.payload
            }
        default :
            console.error('ERROR')
            return state;
    }
}


const store=createStore(reducer)


class App extends Component {
    render() {

        return (
            <div>
                <Provider store={store}>
                    <FuncComp/>
                </Provider>
            </div>
        );
    }
}

export default App;
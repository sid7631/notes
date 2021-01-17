import React from 'react';

export const WithLoading = (WrappedComponent) => {

    return function(...props) {
        
        if(props.loading){
            return <div>loading</div>
        } else {
            return <WrappedComponent {...props} />
        } 
    }
}



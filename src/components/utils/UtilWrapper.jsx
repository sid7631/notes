import { Snackbar, Grow } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Loading.scss"

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const UtilWrapper = ({ children, ...props }) => {

    const isLoading = useSelector(state => state.auth.loading)
    const authError = useSelector(state => state.auth.error)
    const [notify, setnotify] = useState(false)
    const [transition, settransition] = useState(Grow)
    const [notifyType, setnotifyType] = useState("info")
    const [notifyMessage, setnotifyMessage] = useState(null)

    const snackbarOptions = {
        anchorOrigin: { 'vertical': 'top', 'horizontal': 'center' },
        open: notify,
        onClose: () => setnotify(false),
        TransitionComponent: transition,
        key: transition.name,
    }

    useEffect(() => {
        if (authError) {
            setnotify(true)
            setnotifyType('error')
            setnotifyMessage(authError)
        } else {
            setnotify(false)
        }

        return () => {
            // cleanup
        }
    }, [authError])

    return (
        <React.Fragment {...props}>
            <Snackbar
                {...snackbarOptions}
            >
                <Alert onClose={() => setnotify(false)} severity={notifyType}>
                    {notifyMessage}
                </Alert>
            </Snackbar>

            {isLoading ? (
                <div className="loading-container" >
                    <div className="loading-body">
                        <div className="loading-icon-container"><img src="/images/loading.gif" className="loading-icon" /></div>
                        <div className="loading-line">
                            <div className="inner"></div>
                        </div>
                    </div>

                </div >
            ) : (
                    children
                )}
        </React.Fragment>


    )

}
export default UtilWrapper



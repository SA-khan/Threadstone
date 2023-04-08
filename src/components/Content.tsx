import React from 'react'

const Content = () => {
    return (<React.Fragment>
        <div className="w3-display-middle w3-margin-top w3-center">
            <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>Lawyer's Online</b></span> <span className="w3-hide-small w3-text-light-grey"></span></h1>
        </div>
        <div className='text-center'>
            <p className='bg-light p-4 m-1 display-5'>We Gather to Bring Change</p>
        </div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 float-right m-2">
  <div className="shrink-0">
    <img className="h-12 w-12" src="/images/logo.png" alt="ChitChat Logo" />
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div>
    </React.Fragment>)
}

export default Content;
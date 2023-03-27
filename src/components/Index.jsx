import React, { useState, useEffect } from 'react';
import Header from '../core/header';
import Content from './Content';
import Footer from '../shared/footer';

const index = () => {
    return (<React.Fragment>
        <Header />
        <Content />
    </React.Fragment>)
}

export default index;
import React from 'react';
import pfd from '../js-questions.pdf'
import { Document, Page } from 'react-pdf'
const Pdf = () => {
    return (
        <div>
            <h3 className='text-center m-5 border p-5 bg-info'> pdf</h3>
            <Document file={pfd}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    );
}

export default Pdf;

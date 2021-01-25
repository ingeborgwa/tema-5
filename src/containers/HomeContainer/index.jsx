import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';




function HomeContainer (){
    const [pageData, setPageData] = useState(null);

    useEffect(() =>{ 

        const client = new Cosmic ();
        const bucket = client.bucket ({
            slug:process.env.BUCKET_SLUG,
            read_key:process.env.READ_KEY
        });

        const params = {
            slug:'hjem',
            props:'slug,title,content'
        };

        bucket.getObject (params)
            .then(data => {
                setPageData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    function renderSkeleton () {
        return(
            <p>Laster..</p>
        );
    }

    function renderPage (){
        return(
            <>
            <h1>{pageData.object.title}</h1>
            <div dangerouslySetInnerHTML={{__html:pageData.object.content}}></div>
            </>
        );
    }

    return(
        <>
        {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    );

}


export default HomeContainer;
import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';


function AboutContainer(){
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        // Vi setter opp CosmicJS-pakken først.
		// Vi benytter miljøvariablene vi la inn tidligere,
        // disse er tilgjengelige gjennom objektet process.env
        
        const client = new Cosmic ();
        const bucket = client.bucket ({
            slug:process.env.BUCKET_SLUG,
            read_key:process.env.READ_KEY
        });
        // slug her genereres når du lager innholdet ditt.
        // Du finner dette om du redigerer objektet.
        const params = {
            slug:'om-oss',
            props:'slug,title,content'
        };

        // Hent objektet med getObject() og lagre resultatet.
		// i state. Får du en feil, bør du vise brukeren at noe feil har skjedd.
        // For eksemplets skyld console.error-er vi den bare her.
        
        bucket.getObject (params)
            .then(data => {
                setPageData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    function renderSkeleton() {
        return (
            <p>Laster data..</p>
        );
    }

    function renderPage(){
        return(
            <main>
              <h1>{pageData.object.title}</h1>
              <div dangerouslySetInnerHTML={{__html: pageData.object.content}} />
            </main>
        );
    }

    return(
        <>
        {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    );
};

export default AboutContainer;

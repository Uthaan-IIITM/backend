# Uthaan Website Backend

## Routes
    1./api 
        1.1 /api/shows 
            GET - To fetch a show  
                1.1.1 /api/shows?name=beMyGuest&season=1 
                1.1.2 /api/shows?name=kyc&season=2 
                1.1.3 /api/shows?name=turnTheTable&season=1 
                ...
            POST - To create a new show 
                body : name,season,playlistId

        1.2 /api/articles 

        1.3 /api/interviews  

        1.4 /api/events 
            GET = To fetch events
            POST = To create events
        
        1.5 /api/images
            GET = To get all the images
            POST = To upload single or multiple images
            DELETE = To delete ALL images in the database

            1.5.1 /api/images/:imageId
                DELETE = To delete the image with given imageId
            


    2./auth
        2.1 /auth/login 


